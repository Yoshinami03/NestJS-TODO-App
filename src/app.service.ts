import { Injectable } from '@nestjs/common';
import { HealthCheckDto } from './dto/health-check.dto';

@Injectable()
export class AppService {
  healthCheck(): HealthCheckDto {
    return {
      status: 'ok',
      message: 'TODO API is running',
      timestamp: new Date().toISOString(),
    };
  }
}
