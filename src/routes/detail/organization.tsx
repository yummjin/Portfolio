import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/detail/organization')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/detail/organization"!</div>;
}
