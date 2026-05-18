import {
  Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, Request
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('todos')
export class TodosController {
  constructor(private service: TodosService) {}

  @Get()
  findAll(@Request() req) {
    return this.service.findAll(req.user.id);
  }

  @Post()
  create(@Body() body: any, @Request() req) {
    return this.service.create(body.title, req.user.id);
  }

  @Patch(':id')
  toggle(@Param('id') id: number) {
    return this.service.toggle(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}