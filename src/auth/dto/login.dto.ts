import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'user@example.com', description: 'User email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ 
    example: 'Password123!', 
    description: 'User password - must be at least 8 characters' 
  })
  @IsString()
  @MinLength(8)
  password: string;
}