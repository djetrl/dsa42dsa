import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
@Module({
  imports: [DatabaseModule, DocumentBuilder, SwaggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
