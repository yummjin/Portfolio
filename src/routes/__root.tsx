import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Header } from '@/widgets/menu/ui';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='relative h-screen w-screen'>
        <Header />
        <div className='absolute inset-0 m-auto h-full w-[80%] max-w-370'>
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
