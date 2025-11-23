import { Body, Controller, Post } from '@nestjs/common';
import { CreateService } from './create.service';
import { TaskDto } from 'src/dto/util.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class CreateController {
  constructor(private readonly createService: CreateService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<TaskDto> {
    return await this.createService.CreateTask(createTaskDto);
  }
}
