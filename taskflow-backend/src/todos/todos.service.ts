import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private repo: Repository<Todo>,
  ) {}

  // GET TODOS (USER SPECIFIC)
  findAll(userId: number) {
    return this.repo.find({
      where: { userId },
      order: { id: 'DESC' },
    });
  }

  // CREATE TODO (USER SPECIFIC)
  create(title: string, userId: number) {
    const todo = this.repo.create({
      title,
      completed: false,
      userId,
    });

    return this.repo.save(todo);
  }

  // TOGGLE TODO (IMPORTANT: no user mix issue)
  async toggle(id: number) {
    const todo = await this.repo.findOneBy({ id });

    if (!todo) throw new NotFoundException('Todo not found');

    todo.completed = !todo.completed;

    return this.repo.save(todo);
  }

  // DELETE TODO
  async delete(id: number) {
    const todo = await this.repo.findOneBy({ id });

    if (!todo) throw new NotFoundException('Todo not found');

    return this.repo.delete(id);
  }
}