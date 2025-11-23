import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheckDto } from './dto/health-check.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): HealthCheckDto {
    return this.appService.healthCheck();
  }
}
