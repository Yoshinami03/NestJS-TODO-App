import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteService } from './delete.service';
import { TaskDto } from 'src/dto/util.dto';

@Controller('tasks')
export class DeleteController {
  constructor(private readonly deleteService: DeleteService) {}

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TaskDto> {
    return await this.deleteService.DeleteTask(id);
  }
}
