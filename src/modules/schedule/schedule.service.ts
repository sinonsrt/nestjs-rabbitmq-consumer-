import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Injectable()
export class ScheduleService {
  async create(createScheduleDto: CreateScheduleDto) {
    return 'This action adds a new schedule';
  }

  async remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
