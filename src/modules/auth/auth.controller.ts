import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('student/login')
  async studentLogin(@Res({ passthrough: true }) res: Response, @Body() loginDto: LoginDto) {
    const result = await this.authService.login(loginDto);
    res.cookie('booking_access_token', result.accessToken, { httpOnly: true });
    res.cookie('booking_refresh_tokem', result.refreshToken, { httpOnly: true });
    return result;
  }
}
