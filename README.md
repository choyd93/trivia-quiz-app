# trivia-quiz-app
심플 퀴즈 앱

## 1. 프로젝트 소개
trivia API를 활용한 간단한 퀴즈앱 입니다.
- 퀴즈 수, 카테고리, 난이도, 문제타입 선택 가능
- 4개 보기 중 항목 선택 후 답안이 맞았는지 확인 가능 
- 퀴즈풀기 완료 후 경과 시간 및 정답 & 오답 확인 가능 
- AWS Amplify를 통해 정적 사이트 배포

🏠 <a href=https://main.d3dku69za6fcxq.amplifyapp.com>웹 페이지</a>


## 2. 기술 스택
- `TypeScript` : 정적 타입을 도입하여 코드 안전성 및 유지보수를 쉽게 하기위해 사용
- `React`: 웹UI 라이브러리
- `TanStack Query (구 React-Query) `: 데이터 패칭 라이브러리 
- `Styled-components` : css-in-js을 통해 컴포넌트 스타일을 관리하기 위해 사용
- `ESLint` : 코드의 컨벤션 검사를 위해 사용
- `Pretiier` : 코드의 컨벤션 유지를 위해 사용
- `AWS Amplify` : 정적 사이트 배포


## 3. 프로젝트 구조

```ts
│      
├── public                 // Favicon 등 Static Resource 저장
│   ├── favicon.png
│   └── index.html
├── src
│   ├── api                // REST API 사용을 위한 HTTP 서비스, Axios Error Handle
│   ├── assets             // 아이콘, data 및 글로벌 Style 
│   ├── components         // 재사용 가능한 컴포넌트
│   ├── hooks              // Custom Hooks
│   ├── pages              // 페이지
│   ├── utils              // 유틸리티 공통 함수 모음
│   ├── App.tsx
│   └── index.tsx 
├── README.md
├── package.json           // npm 패키지 의존성 파일
├── .env                   // 환경변수 관리 파일
├── .eslintre              // ESLint 설정 파일 - airbnb 컨벤션을 따름
├── .gitignore             // git에 추가되지 않아야 할 파일 정의
├── .prettierreignore      // Prettierignore 설정 파일
├── .prettierre.js         // Prettier 설정 파일
├── craco.config.js        // 웹팩 옵션 override 설정 파일
├── tsconfig.json          // typqscript 설정 파일
└── yarn.lock              // yarn 패키지 버전관리 파일
```


