import { Injectable } from '@nestjs/common';
import { TaskDto } from 'src/dto/util.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskRepository } from 'src/repository/task.repository';

@Injectable()
export class UpdateService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async UpdateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<TaskDto> {
    return await this.taskRepository.update(id, updateTaskDto);
  }
}
