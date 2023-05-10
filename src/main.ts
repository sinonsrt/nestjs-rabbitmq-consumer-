import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:admin@localhost:5672'],
        queue: 'scheduleQueue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  await app.listen().then(() => console.log('Schedule consumer is up! 💮'));
}
bootstrap();
