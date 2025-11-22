import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateModule } from './modules/create/create.module';
import { ReadModule } from './modules/read/read.module';
import { UpdateModule } from './modules/update/update.module';
import { DeleteModule } from './modules/delete/delete.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CreateModule, ReadModule, UpdateModule, DeleteModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
