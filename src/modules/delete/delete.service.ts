import { Injectable } from '@nestjs/common';
import { TaskDto } from 'src/dto/util.dto';
import { TaskRepository } from 'src/repository/task.repository';

@Injectable()
export class DeleteService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async DeleteTask(id: string): Promise<TaskDto> {
    return await this.taskRepository.delete(id);
  }
}
