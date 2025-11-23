import { Injectable } from '@nestjs/common';
import { HealthCheckDto } from './dto/util.dto';

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
