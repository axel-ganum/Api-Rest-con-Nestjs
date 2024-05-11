import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Register } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

interface RequestWithUser extends Request {
  user: {
    eamil: string;
    role: string;
  };
}
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() regieter: Register) {
    return this.authService.register(regieter);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @ApiBearerAuth()
  @Get('profile')
  @Auth(Role.USER)
  profile(@ActiveUser() user:UserActiveInterface) {
    return this.authService.profile(user);
  }
}


export { Auth };

