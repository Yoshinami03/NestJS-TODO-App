import { Injectable } from '@nestjs/common';
import { TaskDto } from 'src/dto/util.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from 'src/repository/task.repository';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskDto> {
    const taskId = randomUUID();

    return await this.taskRepository.create({
      id: taskId,
      name: createTaskDto.name,
      startDate: createTaskDto.startDate,
      endDate: createTaskDto.endDate,
      content: createTaskDto.content,
    });
  }
}
