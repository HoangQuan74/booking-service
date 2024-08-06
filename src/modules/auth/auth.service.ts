import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/bcrypt';
import { userMessages } from 'src/common/constants/user.constant';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private jwtService: JwtService,
    ) {}
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userRepository
        .createQueryBuilder('user')
        .addSelect('user.password')
        .where('user.email = :email', { email })
        .getOne();
        
    if (!user) throw new UnauthorizedException(userMessages.INVALID_CREDENTIALS);

    const isPasswordMatch = comparePassword(password, user.password);
    if (!isPasswordMatch) throw new UnauthorizedException(userMessages.INVALID_CREDENTIALS);
    if (!user.active) throw new UnauthorizedException(userMessages.ACCOUNT_INACTIVE);
    if (!user.emailVerifiedAt) throw new UnauthorizedException(userMessages.EMAIL_NOT_VERIFIED);

    const accessToken = this.jwtService.sign({ sub: user.id });
    const refreshToken = this.jwtService.sign({ sub: user.id }, { expiresIn: ''});
    delete user.password;
    return { accessToken, refreshToken, ...user };
  }

}

