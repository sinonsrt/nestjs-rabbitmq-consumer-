import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import env from './config/env';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${env.RMQ_USER}:${env.RMQ_PASSWORD}@${env.RMQ_URL}`],
        queue: env.RMQ_QUEUE,
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  await app.listen().then(() => console.log('Schedule consumer is up! 💮'));
}
bootstrap();
