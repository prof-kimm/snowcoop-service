import { Controller, Post, Body, Response, ValidationPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../../common/dtos/login-user.dto';
import { CreateUserDto } from 'common/dtos';
import { UserService } from 'modules/user/user.service';
import { JwtPayload, UserPayload } from 'common/interfaces';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  @Post('login')
  async login(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<JwtPayload> {
    return await this.authService.processLogin(loginUserDto);
  }

  @Post('register')
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<JwtPayload> {
    const user = await this.userService.create(createUserDto);
    const { id, email, firstName } = user;
    return await this.authService.createToken({ id, email, firstName } as UserPayload);
  }
}
