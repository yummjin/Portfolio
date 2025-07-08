import { createFileRoute, redirect } from '@tanstack/react-router';
import { PATH } from '@/shared/constants';
import { getSession } from '@/shared/utils';

export const Route = createFileRoute('/')({
  component: App,
  beforeLoad: () => {
    const isAuthenticated = getSession('isAuthenticated');
    if (!isAuthenticated) {
      throw redirect({
        to: PATH.LOGIN,
      });
    }
  },
});

function App() {
  return <div className='h-full w-full bg-red-400 text-center'></div>;
}
