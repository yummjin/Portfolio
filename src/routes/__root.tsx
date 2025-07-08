import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from '@/widgets/menu/ui'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="h-screen w-screen relative">
        <Header />
        <div className="m-auto w-[80%] max-w-370 h-full">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
