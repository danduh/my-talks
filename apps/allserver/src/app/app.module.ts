import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordlessController } from '../passwordless/passwordless.controller';

@Module({
  imports: [],
  controllers: [AppController, PasswordlessController],
  providers: [AppService],
})
export class AppModule {}
