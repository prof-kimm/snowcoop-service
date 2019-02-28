import * as jwt from 'jsonwebtoken';
import {
  Injectable,
  Inject,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { UserPayload } from '../../common/interfaces/user-payload.interface';
import { JWT_OPTIONS } from './auth.constants';
import { JwtOptions } from '../../common/interfaces/jwt-options.interface';
import { LoginUserDto } from '../../common/dtos/login-user.dto';
import { createCipher, createDecipher } from 'crypto';

@Injectable()
export class AuthService {
  private readonly algorithm = 'aes-256-ctr';
  private readonly key = 'nest-workshop';

  constructor(
    @Inject(JWT_OPTIONS) private readonly jwtOptions: JwtOptions,
    private readonly userService: UserService,
  ) { }

  async processLogin(loginUserDto: LoginUserDto) {
    const { id, email, firstName } = await this.validateLoginUserDto(loginUserDto);
    return await this.createToken({ id, email, firstName } as UserPayload);
  }

  async createToken(payload: UserPayload) {
    const { expiresIn, secret } = this.jwtOptions;

    const token = jwt.sign(
      payload,
      secret,
      { expiresIn },
    );
    return {
      user: payload,
      token,
    };
  }

  public async validateLoginUserDto(loginUserDto: LoginUserDto): Promise<User> {
    const { password, email } = loginUserDto;
    const user = await this.userService.findOne({ email });
    const isValid = await this.compare(password, user.password);

    if (!isValid) {
      throw new UnauthorizedException();
    }
    return user;
  }

  public async validateUserPayload(payload: UserPayload): Promise<User> {
    const { email, id } = payload;
    try {
      const user = await this.userService.findOne({ id });
      return user.email === email ? user : null;
    } catch {
      return null;
    }
  }

  public validateToken(token: string): UserPayload {
    try {
      return jwt.verify(token, this.jwtOptions.secret) as UserPayload;
    } catch {
      return null;
    }
  }

  private hash(text: string): string {
    const cipher = createCipher(this.algorithm, this.key);
    return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
  }

  private compare(text: string, hash: string): boolean {
    const decipher = createDecipher(this.algorithm, this.key);
    const decoded =
      decipher.update(hash, 'hex', 'utf8') + decipher.final('utf8');
    return decoded === text;
  }
}
