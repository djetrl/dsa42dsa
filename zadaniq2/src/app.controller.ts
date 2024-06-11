import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateRandomUserDto } from 'dto/create.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('solution')
  async solution() {
    const res = await this.appService.problemSolution();

    return res;
  }
  @UsePipes(new ValidationPipe())
  @Post('UsersTest')
  async createTestUser(@Body() dto: CreateRandomUserDto) {
    const res = await this.appService.createTestUser(dto.countUser);
    return res;
  }
}
