import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.pORT || 5000;
  const app = await NestFactory.create(AppModule);

  app.enableCors({credentials: true, origin: process.env.CLIENT_URL});

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

bootstrap();
