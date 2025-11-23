import { Module, Global } from '@nestjs/common';
import { TaskRepository } from './task.repository';

@Global()
@Module({
  providers: [TaskRepository],
  exports: [TaskRepository],
})
export class RepositoryModule {}
