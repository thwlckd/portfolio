import { Project } from '@/types';

const PROJECTS: Project[] = [
  {
    name: 'Plantopia',
    thumbnail: 'plantopia1.png',
    images: [
      'plantopia1.png',
      'plantopia2.png',
      'plantopia3.png',
      'plantopia4.png',
      'plantopia5.png',
      'plantopia6.png',
      'plantopia7.png',
      'plantopia8.png',
    ],
    git: 'https://github.com/thwlckd/plantopia-react',
    web: 'https://plantopia-react.vercel.app',
    account: { id: 'elice@code.com', password: 'elice1234' },
    summary: '반려식물 가이드 및 다이어링 웹 앱 🌱',
    description: `식물 집사를 위한 식물 관리 팁을 제공하고, 반려 식물의 돌봄 기록을 남길 수 있는 식물 관리 서비스입니다.\n
  코로나19 사태 이후, 성장하는 반려 식물 / 홈가드닝 시장의 수요에 반응하여 기획하게 되었습니다.\n
  서비스의 주요 기능으로 '사용자 위치 기반 날씨 제공', '식물도감', '내 식물 관리', '다이어리' 기능을 제공합니다.\n
  모바일 친화적인 UI/UX를 제공하고 PWA를 통해 앱과 같은 경험을 제공합니다.`,
    role: `React + Vite + Typescript 환경에서 식물도감, 로그인/회원정보 파트를 개발했습니다.\n
  Open API를 이용하여 식물도감에서 제공할 데이터를 구축했습니다.
  Python의 Beautiful Soup를 이용하여 데이터를 크롤링하고 Pandas로 정제하여 Firestore에 자제 식물 데이터를 구축했습니다.\n
  Firebase의 Authentication, Firestore, Storage를 이용해 백엔드 개발을 대체했고 Bass의 장단점을 경험할 수 있었습니다.
  강력한 구글의 보안을 기반으로 local/session 방식을 이용한 자동 로그인 및 OAuth 기능을 손쉽게 구현할 수 있는 점이 장점으로 다가왔습니다.
  반면 Firestore는 SQL를 사용할 수 없어 데이터 쿼리에 한계가 있다는 단점을 겪었고, 제공되는 API의 제한적인 기능을 이용해 불편함을 해결해야 했습니다. (LIKE, RAND 기능 제공 X)\n
  성능을 개선의 의도적 고민의 결과로 코드 스플리팅을 적용했습니다.
  앱의 각 섹션별 route를 Lazy loading 하여 최초 번들 사이즈 및 로딩 속도를 줄였고, Suspense의 fallback UI를 이용해 사용자 경험을 높였습니다.\n
  3주간의 스프린트를 마치고 UX/DX 개선을 목적으로 프로젝트를 리팩토링했습니다.
  React Query를 도입하여 컴포넌트 내부의 view/data layer를 구분하였습니다.
  클라이언트와 서버의 상태를 분리하여 상태 관리를 유연하게 할 수 있었고, refetch/revalidation를 이용해 기존 코드의 보일러 플레이트를 줄여 DX를 향상시킬 수 있었습니다.
  사용자 위치 기반 날씨를 제공을 위한 api 호출 전후로 layout shift가 발생했고, 데이터 로딩 간 스켈레톤 UI를 적용하여 문제를 해결했습니다.
  `,
    skills: [
      'React',
      'Typescript',
      'Sass',
      'React Query',
      'Firebase',
      'Python',
      'PWA',
    ],
    tags: ['4인 팀 프로젝트', '식집사', '식물도감', '다이어리'],
  },
  {
    name: 'Fragrant',
    thumbnail: 'fragrant1.png',
    images: [
      'fragrant1.png',
      'fragrant2.png',
      'fragrant3.png',
      'fragrant4.png',
      'fragrant5.png',
    ],
    git: 'https://github.com/thwlckd/fragrant-nodejs',
    summary: '향수 온라인 쇼핑몰 🛍️',
    description: `향수를 쉽게 구매 및 판매할 수 있는 온라인 쇼핑몰입니다.\n
  브랜드, 노트, 성별로 카테고라이징 하여 향수를 리스트 합니다.
  향수별 탑, 미들, 베이스 노트를 포함한 세부 정보를 제공합니다.
  사용자는 상품을 장바구니에 추가 및 구매하고, 주문 내역을 통해 배송 정보 및 상세 내역을 확인할 수 있습니다.
  관리자는 관리자 페이지를 이용해 향수, 회원, 주문 정보를 손쉽게 관리할 수 있습니다.`,
    role: `VanilaJS + Express.js 환경에서 백엔드 개발을 담당했습니다.\n
  MVC 패턴의 auth, user, order api를 개발했습니다.
  Mongoose를 이용하여 정의한 데이터 스키마를 기반으로 DAO를 만들어 Model layer를 분리했습니다.
  Service layer는 비지니스 로직, Controller layer는 api 요청의 인터페이스 담당으로 역할을 분리하여 유지 보수/디버깅에 유리한 구조를 가져갔습니다.
  api 요 청간 처리를 위해 에러 처리 핸들러를 만들어 error.log 파일에 에러 로그를 남기도록 하여 에러 상황에 대비했습니다.
  Postman을 이용해 api 테스트를 진행했습니다.\n
  Passport.js를 이용하여 jwt 인증 및 OAuth를 개발했습니다.
  로그인 성공 시 jwt를 발급하여 response 쿠키에 담아 클라이언트에 제공했습니다.
  이후 권한이 필요한 api 요청은 미들웨어를 통해 request 쿠키의 jwt payload를 확인하여 회원/비회원/관리자 인증을 진행하도록 작업했습니다.
  구글, 카카오 소셜 로그인 기능을 개발했습니다.\n
  Nodemailer를 이용해 이메일 인증 기능을 개발했습니다.
  인증번호 기반 이메일 인증 방법을 개선하고자 인증 링크 방식의 이메일 인증 기능을 개발했습니다.
  회원가입 시 입력한 이메일로 인증 링크를 포함한 메일을 전송시켰습니다.
  인증 링크 클릭 시 emailValidation api가 호출되고 response 쿠키에 jwt를 심어 해당 이메일을 인증하도록 구현했습니다.`,
    skills: [
      'VanilaJS',
      'Express.js',
      'Passport.js',
      'MongoDB',
      'Mongoose',
      'Postman',
    ],
    tags: ['6인 팀 프로젝트', '향수', '온라인 쇼핑몰', '관리자 페이지'],
  },
  {
    name: 'Sfaclog',
    thumbnail: 'sfaclog1.png',
    images: [
      'sfaclog1.png',
      'sfaclog2.png',
      'sfaclog3.png',
      'sfaclog4.png',
      'sfaclog5.png',
      'sfaclog6.png',
    ],
    git: 'https://github.com/SFACLOG/sfaclog',
    web: 'https://sfaclog-web.vercel.app',
    account: { id: 'imsi@google.com', password: '123456789!' },
    storybook:
      'https://dev-design-system--65af68a0f0808a50db600133.chromatic.com',
    summary: '개발자 아티클 커뮤니티 🗞️',
    description: `개발자를 블로그, 사이드 프로젝트 구인 커뮤니티를 제공하는 서비스입니다.\n
  (주)스펙스페이스의 웹/앱 개발자 인턴형 프로그램 일환으로 팀장으로서 프로젝트를 진행했습니다.\n
  밸로그, 노트폴리오의 장점을 벤치마킹하여 기획한 서비스를 디자이너와 협업하여 개발했습니다.\n
  서비스의 주요 기능으로 '기술 블로그', '사이드 프로젝트 모집', '마크다운 템플릿', '회원 팔로잉' 기능을 제공합니다.`,
    role: `터보레포를 이용해 스팩로그(web) / 디자인 킷(sfac-design-kit) 두 프로젝트를 하나의 레포지토리에서 관리했습니다.
  web 프로젝트는 Next.js + Typescript + Tailwind 환경, sfac-design-kit 프로젝트는 React + Typescript + Tailwind + Storybook 환경에서 개발했습니다.\n
  sfac-design-kit 디자인 킷 개발을 메인으로 담당했습니다.
  변경에 유연한 UI 컴포넌트 개발을 위해 clsx + twMerge + cva 패키지의 조합을 이용해 UI 케이스를 정의했습니다.
  범용적인 컴포넌트 설계를 위해 스타일을 외부에서 주입할 수 있도록 개발했습니다.
  스토리북을 이용해 UI 유즈케이스에 대한 테스트를 진행하고 문서화 하였습니다.
  CI/CD를 구축하여 develop 브랜치를 기준으로 PR merge시 크로마틱에 자동 배포하는 workflow를 구축하였고, 디자이너/개발자와 실시간으로 작업물을 공유했습니다.\n
  web 프로젝트에서는 PocketBase를 이용하기 위한 flow 구성 및 마이페이지 개발을 담당했습니다.
  PocketBase에서 제공하는 인터페이스에 비지니스 로직을 녹여 api layer를 구성하였고, React Query를 이용한 커스텀 훅을 만들어 지속 가능한 코드 작성을 지향했습니다.
  Next.js의 Parallel Routes를 이용하여 마이페이지의 레이아웃 내 동적 섹션을 조건부 렌더링하도록 구현했습니다.
  React Query + IntersectionObserver 조합으로 무한 스크롤을 구현하여 게시글을 패칭하도록 했습니다.
  Error Boundary를 적용하여 런타임의 에러 상황을 대비했습니다.`,
    skills: [
      'Next.js',
      'Typescript',
      'Tailwind',
      'React Query',
      'Storybook',
      'PocketBase',
      'TurboRepo',
    ],
    tags: ['3인 팀 프로젝트', '개발자 커뮤니티', '블로그', '사이드 프로젝트'],
  },
  {
    name: '모바일 주차 요금 정산 서비스',
    thumbnail: 'parking-app1.png',
    images: [
      'parking-app1.png',
      'parking-app2.png',
      'parking-app3.png',
      'parking-app4.png',
      'parking-app5.png',
    ],
    git: 'https://github.com/thwlckd/MobileParkingPayment-Python-App',
    summary: '입출차 연동 주차 요금 사전 결제 앱 🚗',
    description: `출차 전 모바일 앱을 이용하여 간편하게 주차 요금을 사전 결제하는 서비스입니다.
  흔히 백화점에서 볼 수 있는 주차 요금 결제 키오스크를 모바일 앱으로 가져와 그 장점을 부각시켰습니다.\n
  서비스의 필요성
  - 코로나19로 인한 언택트 사회 시대상을 반영한 모바일 비대면 결제
  - 사전 결제를 통한 원활한 출차 유도
  - 앱을 이용한 기타 부가 서비스 확장 가능(할인 쿠폰, 여석 확인 등)\n
  서비스의 주요 기능
  - 카메라를 이용한 입출차 차량 및 번호판 인식
  - 차량 영상을 이용한 할인 차량 인식
  - 앱을 이용한 사전 결제\n
  영남대학교 캡스톤 디자인의 일환으로 개발한 프로젝트입니다.`,
    role: `학부 동안 배워온 전공 지식으로 사회에 기여하는 방법을 계속해서 고민해 왔습니다.
  매일 점심시간 학교 출입구에 주차 요금 결제로 인한 교통혼잡에 반복되는 불편함을 겪었고, 모바일 주차 요금 정산 서비스를 기획하게 되었습니다.\n
  Android Studio + Java + MySQL을 이용한 앱 개발을 메인으로 담당했습니다.
  Java를 주력 언어로 다루지 않고 Android Studio는 처음이었기 때문에, 코드의 퀄리티보다 시스템의 구조과 앱의 완성에 초점을 두고 개발했습니다.
  Android Studio는 보안상의 문제로 MySQL과의 직접적인 접근이 제한되었고, PHP + Apache를 중계서버로 이용하여 앱과 DB가 통신할 수 있도록 설계했습니다.
  또한 하나의 DB를 카메라/모바일 앱 두 서비스가 공유하도록 하여 차량의 입출차 정보 및 요금 정보를 실시간으로 공유할 수 있도록 설계했습니다.
  카메라 모듈을 통해 DB에 입력된 차량번호 및 입차 시간을 기반으로 차량의 주차요금을 계산했고, 앱을 이용해 이를 확인 및 결제하는 인터페이스를 만들었습니다.\n
  모바일 주차 요금 정산 서비스로 가까이 있는 문제를 소프트웨어로 해결하는 매력적인 경험을 할 수 있었습니다.`,
    skills: ['Python', 'OpenCV', 'Java', 'Android Studio', 'PHP', 'MySQL'],
    tags: [
      '2인 팀 프로젝트',
      '캡스톤 디자인',
      '주차장',
      '입출차',
      '사전 결제',
      '키오스크 앱',
    ],
  },
];

export default PROJECTS;