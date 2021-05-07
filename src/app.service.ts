import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `${new Date()} - Hello World!\nHello again!`;
  }
}
