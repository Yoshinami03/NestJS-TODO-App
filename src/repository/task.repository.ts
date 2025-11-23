import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TaskDto } from '../dto/util.dto';

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    content: string;
  }): Promise<TaskDto> {
    const task = await this.prisma.task.create({
      data,
    });

    return task;
  }

  async readOne(id: string): Promise<TaskDto> {
    const readTask = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!readTask) {
      throw new Error(`Task with id ${id} not found`);
    }

    return readTask;
  }

  async readAll(): Promise<TaskDto[]> {
    const taskList = await this.prisma.task.findMany();
    return taskList;
  }

  async update(task: TaskDto): Promise<TaskDto> {
    const updateTask = await this.prisma.task.update({
      where: { id: task.id },
      data: {
        name: task.name,
        startDate: task.startDate,
        endDate: task.endDate,
        content: task.content,
      },
    });

    return updateTask;
  }

  async delete(id: string): Promise<TaskDto> {
    const deleteTask = await this.prisma.task.delete({
      where: { id },
    });

    return deleteTask;
  }
}
