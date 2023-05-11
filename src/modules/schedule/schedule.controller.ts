import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Controller()
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @EventPattern('createSchedule')
  create(@Payload() createScheduleDto: CreateScheduleDto) {
    console.log(createScheduleDto);
    return this.scheduleService.create(createScheduleDto);
  }

  @EventPattern('removeSchedule')
  remove(@Payload() id: number) {
    return this.scheduleService.remove(id);
  }
}
