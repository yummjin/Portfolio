import { Link, useLocation } from '@tanstack/react-router';
import { Logo, MenuButton, PlusButton } from '@/assets/icons';
import { PATH } from '@/shared/constants';
import { cn } from '@/shared/utils';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex h-[44px] w-screen items-center justify-between bg-[#F2F2F7] px-4',
        isHome && 'bg-gray-200/40 backdrop-blur-md',
      )}
    >
      <Link
        to={PATH.HOME}
        className='flex cursor-pointer items-center gap-1 text-2xl font-bold outline-none'
      >
        <img src={Logo} alt='logo' className='size-6' />
      </Link>
      <div className='flex items-center gap-3'>
        <button className='grid size-[36px] cursor-pointer place-items-center rounded-lg outline-none hover:bg-gray-100'>
          <img src={PlusButton} alt='plus' className='size-6' />
        </button>
        <button className='grid size-[36px] cursor-pointer place-items-center rounded-lg outline-none hover:bg-gray-100'>
          <img src={MenuButton} alt='menu' className='size-6' />
        </button>
      </div>
    </header>
  );
}
