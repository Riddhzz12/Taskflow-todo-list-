import {
  Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, Request
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard) // ALL ROUTES IN HERE ARE PROTECTED
@Controller('todos') //ROUTES HANDLE HOGA GET POST PATCH DELETE
export class TodosController {
  constructor(private service: TodosService) {} //CONTROLLER ONLY REQ HANDLE ACTUAL KAAM SERVICE

  @Get()
  findAll(@Request() req) { //REQ OBJ = USER KA DATA + TOKEN INFO
    return this.service.findAll(req.user.id); //JWT STRATEGY NE USER ATTACH KIA HAI RE MEIN SO ONLY THIS TODO WILL COME
  }

  @Post()
  create(@Body() body: any, @Request() req) {
    return this.service.create(body.title, req.user.userId); //NEW TODO BELONGS TO LOGGED IN USER
  }

  @Patch(':id')
  toggle(@Param('id') id: number) { //MEANING TASK ID 5 UPDATE KRDO
    return this.service.toggle(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) { //REMOVE FROM DB
    return this.service.delete(id);
  }
}