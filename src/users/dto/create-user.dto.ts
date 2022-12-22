import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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

  @ApiProperty({ required: false })
  complement?: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  pis: string;

  @ApiProperty()
  password: string;
}
