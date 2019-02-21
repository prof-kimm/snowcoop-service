import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { authProviders } from './auth.providers';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Global()
@Module({
  imports: [UserModule],
  providers: [JwtStrategy, AuthService, ...authProviders],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }
