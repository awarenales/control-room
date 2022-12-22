import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';

@Module({
  imports: [PassportModule, PrismaModule],
  providers: [AuthService],
})
export class AuthModule {}
