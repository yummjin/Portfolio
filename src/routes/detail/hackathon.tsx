import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/detail/hackathon')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/detail/hackathon"!</div>
}
