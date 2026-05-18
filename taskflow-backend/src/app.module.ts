import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';
import { User } from './users/user.entity';
import { Todo } from './todos/todo.entity';

@Module({
  imports: [
    // 🧠 DATABASE CONNECTION
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT as string) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'taskflow',
      entities: [User, Todo],
      synchronize: true, // (dev only)
    }),

    // 🔐 AUTH MODULE
    AuthModule,

    // 📦 TODOS MODULE
    TodosModule,
  ],
})
export class AppModule {}