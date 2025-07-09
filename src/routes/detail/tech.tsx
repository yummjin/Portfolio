import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/detail/tech')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/detail/tech"!</div>
}
