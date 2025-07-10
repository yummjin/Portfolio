import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/detail/hackathon')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex flex-col gap-4 pb-[100px]'>
      <p className='text-4xl font-semibold'>해커톤</p>
      <p>밤 새는 것을 좋아하는 제게는 정말 재밌었던 경험들입니다.</p>
    </div>
  );
}
