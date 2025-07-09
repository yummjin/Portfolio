import { Outlet, createFileRoute } from '@tanstack/react-router';

import { DetailHeader } from '@/widgets/detail/ui';

export const Route = createFileRoute('/detail')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='scrollbar-hide absolute inset-0 flex size-full flex-col overflow-scroll'>
      <div className='m-auto flex h-full w-[345px] flex-col gap-y-[30px] pt-[calc(44px+24px)] md:w-[690px] lg:w-[1020px]'>
        <DetailHeader />
        <Outlet />
      </div>
    </div>
  );
}
