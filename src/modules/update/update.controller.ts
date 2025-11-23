import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateService } from './update.service';
import { TaskDto } from 'src/dto/util.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<TaskDto> {
    return await this.updateService.updateTask(id, updateTaskDto);
  }
}
