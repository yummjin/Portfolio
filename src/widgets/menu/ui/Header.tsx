import { Logo, MenuButton, PlusButton } from '@/assets/icons';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 flex h-[44px] w-screen items-center justify-between bg-gray-100/40 px-4'>
      <button className='flex cursor-pointer items-center gap-1 text-2xl font-bold outline-none'>
        <img src={Logo} alt='logo' className='size-6' />
        yummmjin
      </button>
      <div className='flex items-center gap-2'>
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
