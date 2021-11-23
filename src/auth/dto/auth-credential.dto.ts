import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  // class validator을 통한 유효성 검사하기.
  @IsString()
  @MinLength(4)
  @MaxLength(10)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // 영어랑 숫자만 가능한 유효성 검사
  @Matches(/^[a-zA-z0-9]*$/, {
    message: 'password only accepts english and numbers',
  })
  password: string;
}
