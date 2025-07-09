import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/detail/project')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/detail/project"!</div>
}
