import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from './modules/schedule/schedule.module';

@Module({
  imports: [DatabaseModule, ScheduleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
