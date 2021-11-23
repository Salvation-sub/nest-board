## 폴더 생성 방법

> --no-spec 붙이는 것들은 테스트 코드 파일을 생성하지 않는 것.

- 모듈 생성 : `nest g module name`
- 컨트롤러 생성 : `nest g controller name --no-spec`
- 서비스 생성 : `nest g service name --no-spec`

## 사용된 모듈 인스톨

- uuid : `npm install uuid --save`
- pipe 모듈 설치:
  - `npm install class-validator class-transformer --save`
- TypeORM : `npm install pg typeorm @nestjs/typeorm --save`
  - @nestjs/typeorm : NestJS 에서 TypeOrm을 사용하기 위해 연동시켜주는 모듈
  - typeorm : TypeORM 모듈
  - pg : Postgres 모듈
- bcryptjs : `npm install bcryptjs --save`
  > 비밀번호 암호화 할때 사용하는 라이브러리. `import * as bcrypt from "bcryptjs";`
- jwt : `npm install @nestjs/jwt @nestjs/passport passport passport-jwt @types/passport-jwt --save`
  - @nestjs/jwt : nestjs에서 jwt를 사용하기 윟래 필요한 모듈
  - @nestjs/passport: nestjs에서 passport를 사용하기 위해 필요한 모듈
  - passport : passport 모듈
  - passport-jwt: jwt 모듈
  - @types/passport-jwt: passport-jwt 모듈을 위한 타입 정의 모듈
