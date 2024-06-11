import { IsNumber } from 'class-validator';
export class CreateRandomUserDto {
  @IsNumber()
  countUser: number;
}
