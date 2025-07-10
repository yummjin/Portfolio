import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/detail/organization')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex flex-col gap-4 pb-[100px]'>
      <p className='text-4xl font-semibold'>조직</p>
      <p>제가 속해있던 조직들입니다.</p>
    </div>
  );
}
