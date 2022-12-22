import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  cep: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  number: string;

  @ApiProperty({ required: false, nullable: true })
  complement: string | null;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  pis: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
