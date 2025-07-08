import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link, createFileRoute } from '@tanstack/react-router';
import { PATH } from '@/shared/constants';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='grid size-full place-items-center'>
      <div className='flex flex-col items-center gap-8'>
        <div className='h-[100px] w-[300px] overflow-hidden object-fill'>
          <DotLottieReact
            src='https://lottie.host/3efa4d60-e962-4ae8-abad-00fa3c1284e9/StykaE4rpd.lottie'
            loop
            autoplay
            style={{ scale: 3 }}
          />
        </div>
        <span className='text-[48px] font-black md:text-[64px]'>yummmjin</span>
        <Link
          to={PATH.HOME}
          className='cursor-pointer rounded-full border-2 bg-black px-8 py-2 text-xl text-white transition duration-300 outline-none hover:border-gray-300 hover:bg-white hover:text-black'
        >
          시작하기
        </Link>
        <p className='text-center text-4xl leading-tight'>
          작은 코드,
          <br />큰 가능성.
        </p>
      </div>
    </div>
  );
}
