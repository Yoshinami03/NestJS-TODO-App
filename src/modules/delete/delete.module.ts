import { Module } from '@nestjs/common';
import { DeleteService } from './delete.service';
import { DeleteController } from './delete.controller';

@Module({
  providers: [DeleteService],
  controllers: [DeleteController],
})
export class DeleteModule {}
