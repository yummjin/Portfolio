import { useLocation, useNavigate } from '@tanstack/react-router';
import { cn } from '@/shared/utils';
import { PATH } from '@/shared/constants/path';

export default function DetailHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const current = '/' + location.pathname.split('/')[2];

  const buttons = [
    { label: '한유진', value: PATH.USER },
    { label: '기술', value: PATH.TECH },
    { label: '프로젝트', value: PATH.PROJECT },
    { label: '해커톤', value: PATH.HACKATHON },
    { label: '조직', value: PATH.ORGANIZATION },
  ];

  return (
    <div className='box-border hidden w-full border-b-[1px] border-gray-200 md:block'>
      <div className='hidden justify-between md:flex md:w-full lg:w-fit lg:gap-12'>
        {buttons.map(button => (
          <button
            key={button.value}
            onClick={() => navigate({ to: `/detail${button.value}` })}
            className={cn(
              'cursor-pointer py-4 font-normal outline-none',
              button.value === current && 'border-b-[1px] border-black',
            )}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
