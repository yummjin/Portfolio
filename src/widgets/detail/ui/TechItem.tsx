import { motion } from 'motion/react';
import { cn } from '@/shared/utils';

interface TechItemProps {
  index: number;
  tech: string;
  level: '상' | '중' | '하';
  description: string;
}

export default function TechItem({
  index,
  tech,
  level,
  description,
}: TechItemProps) {
  return (
    <motion.div
      key={index}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
      className='flex w-full flex-col gap-4 rounded-[11px] border border-gray-300 p-6'
    >
      <div className='flex w-full items-center justify-between'>
        <code className='w-fit rounded-lg bg-gray-200 px-2 py-1 text-2xl font-semibold'>
          {tech}
        </code>
        <div className='flex items-center gap-2'>
          <span>숙련도</span>
          <span
            className={cn(
              'rounded-lg px-2 py-1 text-white',
              level === '상' && 'bg-blue-500',
              level === '중' && 'bg-yellow-500',
              level === '하' && 'bg-gray-500',
            )}
          >
            {level}
          </span>
        </div>
      </div>
      <ul className='overflow-hidden text-gray-700'>
        {description.split('\n').map((line, i) => (
          <li key={i} className='flex items-center gap-2 truncate'>
            <div className='size-1 flex-shrink-0 rounded-full bg-gray-600' />{' '}
            {line}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
