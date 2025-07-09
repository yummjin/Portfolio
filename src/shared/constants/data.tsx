import { GithubIcon, VelogIcon } from '@/assets/icons';
import {
  Dart,
  Flutter,
  Git,
  Javascript,
  Next,
  React,
  Tailwind,
  Typescript,
} from '@/assets/images';

export const SKILLS = [
  {
    title: 'TypeScript',
    image: Typescript,
  },
  {
    title: 'React',
    image: React,
  },
  {
    title: 'Next.js',
    image: Next,
  },
  {
    title: 'Tailwind CSS',
    image: Tailwind,
  },
  {
    title: 'JavaScript',
    image: Javascript,
  },
  {
    title: 'Git',
    image: Git,
  },

  {
    title: 'Dart',
    image: Dart,
  },
  {
    title: 'Flutter',
    image: Flutter,
  },
];

export const PROJECTS = [
  {
    title: '기룡아 밥먹자 : 식단 안내 사이트',
    description: '2024. 10. 20 ~ 2024. 11. 20',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Saphy : 전자기기 중고거래 앱',
    description: '2024. 05. 20 ~ 2024. 10. 31',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'TeamPu : 팀프실 예약 서비스',
    description: '2024. 11. 21 ~ 2024. 12. 15',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'FestaMate : 축제 친구 매칭 웹앱',
    description: '2025. 03. 09 ~ 2024. 05. 17',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Soup : 대학생 프로젝트 관리 플랫폼',
    description: '2024. 10. 20 ~ 2024. 11. 20',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Took! : 전자투표 웹앱',
    description: '2025. 06. 16 ~ 2024. 06. 27',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'EmotionalCore',
    description: '2025. 07. 05 ~ ',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Clab-Time',
    description: '2025. 07. 17 ~ 2025. 07. 26(예정)',
    image: 'https://picsum.photos/200/300',
  },
];

export const HACKATHONS = [
  {
    title: 'KHUTHON 2025',
    description: '2025. 05. 09 ~ 2025. 05. 10',
  },
  {
    title: '2025 us:code 해커톤 in 의성',
    description: '2025. 06. 27 ~ 2025. 06. 29',
  },
];

export const SHORTCUTS = [
  {
    title: 'Github',
    href: 'https://github.com/yummjin',
    image: GithubIcon,
  },
  {
    title: 'Velog',
    href: 'https://velog.io/@yummjin/posts',
    image: VelogIcon,
  },
];

export const INFO_ITEMS = [
  {
    href: 'https://tigers.co.kr/',
    title: '나의 힘',
    image: 'https://tigers.co.kr/img/emblems/emblem_ht.png',
    imageAlt: 'KIA TIGERS',
    description: (
      <p>
        기아 타이거즈 경기를 보며
        <br />
        힘을 얻고 있습니다.
      </p>
    ),
    description2: 'NO.29 화이팅!!',
  },
  {
    href: 'https://github.com/yummjin/Portfolio',
    title: '작업 상세',
    description: (
      <p>
        별건 아니지만
        <br />
        소스 코드도 확인하실 수 있습니다.
      </p>
    ),
    description2: '깃허브 레포지토리로 연결됩니다.',
  },
  {
    href: 'https://www.icloud.com/',
    title: '디자인 영감',
    description: (
      <p>
        매우 애용하는 iCloud의
        <br />
        디자인을 참고하였습니다.
      </p>
    ),
    description2: 'iCloud 사랑합니다.',
  },
];
