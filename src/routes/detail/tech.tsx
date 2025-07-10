import { createFileRoute } from '@tanstack/react-router';

import TechItem from '@/widgets/detail/ui/TechItem';

export const Route = createFileRoute('/detail/tech')({
  component: TechPage,
});

function TechPage() {
  const techs = [
    {
      tech: 'JavaScript',
      level: '상' as const,
      description: '현재 주력으로 사용하고 있는 기술입니다.',
    },
    {
      tech: 'TypeScript',
      level: '상' as const,
      description: '현재 주력으로 사용하고 있는 기술입니다.',
    },
    {
      tech: 'React',
      level: '상' as const,
      description: '현재 주력으로 사용하고 있는 기술입니다.',
    },

    {
      tech: 'Next.js',
      level: '상' as const,
      description: '현재 주력으로 사용하고 있는 기술입니다.',
    },
    {
      tech: 'Tailwind CSS',
      level: '상' as const,
      description: '현재 주력으로 사용하고 있는 기술입니다.',
    },
  ];

  return (
    <div className='flex flex-col gap-4 pb-[100px]'>
      <p className='text-4xl font-semibold'>기술</p>
      <p>제가 자주 사용하는 기술, 배우고 있는 기술, 관심있는 기술들입니다.</p>
      {techs.map((tech, index) => (
        <TechItem key={index} index={index} {...tech} />
      ))}
    </div>
  );
}
