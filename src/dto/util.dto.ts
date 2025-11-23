export class HealthCheckDto {
  status: string;
  message: string;
  timestamp: string;
}

export class TaskDto {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  content: string;
}
