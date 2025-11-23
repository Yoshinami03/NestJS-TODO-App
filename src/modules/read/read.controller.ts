import { Controller, Get } from '@nestjs/common';
import { ReadService } from './read.service';
import { TaskDto } from 'src/dto/util.dto';

@Controller('tasks')
export class ReadController {
  constructor(private readonly readService: ReadService) {}

  @Get()
  async findAll(): Promise<TaskDto[]> {
    return await this.readService.findAllTasks();
  }
}
