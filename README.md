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

## 환경 변수 설정

- `npm install config --save`

- Codebase: XML, JSON, YAML 파일같이 일반적으로 노출되도 상관 없는 정보들
- Environment Variables: 비밀번호나 API Key같은 노출되면 안되는 정보들

### config 모듈을 이용한 설정 파일 생성

1. 루트 디렉토리에 config라는 폴더를 만든 후에 그 폴더 안에 JSON이나 YAML 형식의 파일을 생성합니다. config/deafult.yaml
2. config 폴더 안에 default.yml , development.yml, 그리고 production.yml 파일을 생성하겠습니다.

- default.yml : 기본설정(개발 환경 설정이나 운영 환경 설정에도 적용됨)
- development.yml: default.yml에서 설정한것 + 개발 환경에서 필요한 정보
- production.yml: default.yml에서 설정한 것 + 운영 환경에서 필요한 정보
