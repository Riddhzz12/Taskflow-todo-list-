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

  findAll(userId: number) {
    return this.repo.find({ where: { userId } });
  }

  create(title: string, userId: number) {
    const todo = this.repo.create({ title, completed: false, userId });
    return this.repo.save(todo);
  }

  async toggle(id: number) {
    const todo = await this.repo.findOneBy({ id });
    if (!todo) throw new NotFoundException();
    todo.completed = !todo.completed;
    return this.repo.save(todo);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}