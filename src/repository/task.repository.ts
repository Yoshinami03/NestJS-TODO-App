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

    return {
      id: task.id,
      name: task.name,
      startDate: task.startDate,
      endDate: task.endDate,
      content: task.content,
    };
  }
}
