import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { Request } from 'express';
import { IJwtPayload } from '../interfaces';
import { JWT_SECRET } from 'src/config/environment';
import { userMessages } from '../constants/user.constant';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy, 'jwt-auth') {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        JwtAuthStrategy.extractJwtFromCookie,
      ]),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  private static extractJwtFromCookie(req: Request) {
    return req?.cookies?.jwt;
  }

  async validate(payload: IJwtPayload) {
    const user = await this.userService.findOne(payload.sub);
    if (!user?.active) throw new UnauthorizedException(userMessages.ACCOUNT_INACTIVE);
    this.userService.updateLastLogin(user.id);
    delete user.password;
    return user;
  }
}
