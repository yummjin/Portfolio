import { createFileRoute } from '@tanstack/react-router';
import { Timeline } from '@/widgets/detail/ui';

export const Route = createFileRoute('/detail/user')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <p className='text-4xl font-semibold'>한유진</p>
        <p>
          안녕하세요. <br />
          프론트엔드 개발자를 꿈꾸고 있는 한유진입니다.
          <br />
          현재 경기대학교 컴퓨터공학전공에 재학 중입니다.
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-2xl font-semibold'>개발</p>
        <p>
          보여지는 부분을 만드는 것을 좋아합니다.
          <br />꼭 프로젝트가 아니더라도 만들고 싶은 디자인이 보이면 바로
          빠져들어 만드는 것 같습니다.
          <br />
          디자인 쪽에 관심이 많아 틈틈이 레퍼런스 구경을 하고 있습니다.
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-2xl font-semibold'>타임라인</p>
        <p className='text-gray-500'>
          아직 뭔가 기록이 남는 타임라인은 아니네요..
        </p>
        <Timeline />
      </div>
    </div>
  );
}
