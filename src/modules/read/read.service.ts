import { Injectable } from '@nestjs/common';
import { TaskDto } from 'src/dto/util.dto';
import { TaskRepository } from 'src/repository/task.repository';

@Injectable()
export class ReadService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async ReadAllTask(): Promise<TaskDto[]> {
    return await this.taskRepository.readAll();
  }
}
