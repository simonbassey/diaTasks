import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  launchWelcomeNote(): any {
    return {
      version: `1.0.0`,
      summary: 'Welcome to home for APIs for oragnising your daily life tasks .. one activity/event at a time',
      authors: [
        `simonbassey[simon.dev.bassey@gmail.com]`
      ]

    }
  }
}
