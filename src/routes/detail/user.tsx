import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/detail/user')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p className='text-4xl font-semibold'>한유진</p>
    </div>
  );
}
