import { createFileRoute } from '@tanstack/react-router';

import TechItem from '@/widgets/detail/ui/TechItem';

export const Route = createFileRoute('/detail/tech')({
  component: TechPage,
});

function TechPage() {
  const techs = [
    {
      tech: 'JavaScript',
      level: '상' as const,
      description: `객체 사용, Promise, async/await, then을 통한 비동기 처리를 구현하는 데 능숙합니다.
      내장 메서드인 map, filter, reduce 등을 활용하여 배열을 효율적으로 처리할 수 있습니다.
      lexical scope에 대해 이해하고 있습니다.`,
    },
    {
      tech: 'TypeScript',
      level: '상' as const,
      description: `다양한 타입을 정의하고, 인터페이스와 제네릭을 활용하여 코드의 가독성과 유지보수성을 높일 수 있습니다.
      타입 추론과 타입 가드를 활용하여 런타임 오류를 줄이는 데 능숙합니다.
      타입스크립트의 고급 기능인 mapped types와 conditional types를 이해하고 활용할 수 있습니다.`,
    },
    {
      tech: 'React',
      level: '상' as const,
      description: `컴포넌트 기반 아키텍처를 이해하고, 상태 관리와 생명주기 메서드를 활용하여 동적인 UI를 구현할 수 있습니다.
      커스텀 hook을 작성하여 코드의 재사용성을 높이고, 복잡한 상태 관리를 효율적으로 처리하는 데 익숙합니다.
      Context API를 활용하여 전역 상태 관리를 구현할 수 있습니다.`,
    },
    {
      tech: 'Tailwind CSS',
      level: '상' as const,
      description: `유틸리티 클래스 기반의 스타일링을 통해 빠르게 UI를 구성할 수 있습니다.
      반응형 디자인을 쉽게 구현할 수 있으며, 커스터마이징을 통해 디자인 시스템을 구축할 수 있습니다.`,
    },
    {
      tech: 'PWA',
      level: '중' as const,
      description: `서비스 워커를 활용하여 오프라인에서도 작동하는 웹 애플리케이션을 구현할 수 있습니다.
      manifest.json을 설정하여 앱의 아이콘, 이름, 시작 URL 등을 정의할 수 있습니다.
      푸시 알림을 구현하여 사용자와의 상호작용을 향상시킬 수 있습니다.`,
    },
    {
      tech: 'Next.js',
      level: '하' as const,
      description: `파일 기반 라우팅을 통해 페이지를 구성하고, 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 활용하여 성능을 최적화할 수 있습니다.
      middleware를 사용하여 조건부 렌더링을 구현할 수 있습니다.`,
    },
    {
      tech: 'WebSocket',
      level: '하' as const,
      description: `현재 웹소켓 기술을 사용하여 실시간 데이터 통신을 익숙하게 구현하기 위해 공부 중입니다.`,
    },
  ];

  return (
    <div className='flex flex-col gap-4 pb-[100px]'>
      <p className='text-4xl font-semibold'>기술</p>
      <p>제가 자주 사용하는 기술, 배우고 있는 기술, 관심있는 기술들입니다.</p>
      {techs.map((tech, index) => (
        <TechItem key={index} index={index} {...tech} />
      ))}
    </div>
  );
}
