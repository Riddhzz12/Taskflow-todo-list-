import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ IMPORTANT: allow frontend (3001) to talk to backend (3000)
  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true,
  });

  // optional: global prefix (clean APIs)
  app.setGlobalPrefix('');

  await app.listen(3000);

  console.log(`🚀 Backend running on http://localhost:3000`);
}

bootstrap();