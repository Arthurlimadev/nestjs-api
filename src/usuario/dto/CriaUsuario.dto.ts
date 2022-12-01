import { IsEmail, isNotEmpty, MinLength } from 'class-validator';

export class CriaUsuarioDTO {
  @isNotEmpty()
  nome: string;

  @IsEmail(null, { message: 'O e-mail informado é inválido' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter 6 caracteres' })
  senha: string;
}
