import { createFileRoute, redirect } from '@tanstack/react-router';
import { motion } from 'motion/react';

import { PATH } from '@/shared/constants';
import { cn, getSession } from '@/shared/utils';
import { Wallpaper1 } from '@/assets/images';

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
  return (
    <div className='absolute inset-0 flex size-full flex-col overflow-scroll'>
      <div
        className='h-fit w-full bg-cover bg-center'
        style={{ backgroundImage: `url(${Wallpaper1})` }}
      >
        <div className='m-auto flex h-full w-[345px] flex-col flex-wrap items-center gap-8 pt-[calc(44px+60px)] pb-180 md:grid md:w-[690px] md:grid-cols-2 lg:flex lg:w-[1020px] lg:flex-row'>
          <Card />
          <Card flex />
          <Card flex />
          <Card />
          <Card />
          <Card flex />
        </div>
      </div>
      <div className='h-100 w-full flex-shrink-0 bg-white'></div>
    </div>
  );
}

const Card = ({ flex }: { flex?: boolean }) => (
  <motion.div
    className={cn(
      'bg-tile-bg shadow-tile h-[330px] w-[329px] flex-shrink-0 cursor-pointer rounded-[11px] p-[30px] lg:min-w-[329px]',
      flex && 'lg:flex-1',
    )}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2, ease: 'easeInOut' }}
  ></motion.div>
);
