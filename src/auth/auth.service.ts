import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  findUser(username: string) {
    return this.prisma.user.findFirst({
      where: {
        OR: [{ email: username }, { cpf: username }, { pis: username }],
      },
    });
  }

  async validateUser(username: string, password: string) {
    const user = await this.findUser(username);

    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
