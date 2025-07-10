import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/detail/project')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex flex-col gap-4 pb-[100px]'>
      <p className='text-4xl font-semibold'>프로젝트</p>
      <p>여태까지 진행했던 크고 작은 프로젝트입니다.</p>
    </div>
  );
}
