import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
