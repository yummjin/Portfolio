import { motion } from 'motion/react';

import type { ReactNode } from 'react';
import { cn } from '@/shared/utils';

interface CardProps {
  hoverNone?: boolean;
  flex?: boolean;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  flex,
  children,
  className,
  hoverNone,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-tile-bg/90 shadow-tile h-[330px] w-[329px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[11px] lg:min-w-[329px]',
        flex && 'lg:flex-1',
      )}
      whileHover={hoverNone ? {} : { scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div className={cn('flex size-full flex-col', className)}>{children}</div>
    </motion.div>
  );
}

function CardHeader({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className='flex h-fit w-full gap-[20px] overflow-hidden px-6 py-5'>
      <img src={icon} className='size-[48px] flex-shrink-0 rounded-[11px]' />
      <div className='flex flex-col'>
        <span className='text-2xl font-semibold'>{title}</span>
        <span className='text-nowrap text-ellipsis text-gray-500'>
          {description}
        </span>
      </div>
    </div>
  );
}

function CardImageItem({ image }: { image: string }) {
  return <img src={image} className='size-full object-cover object-center' />;
}

function CardLinkItem({ image, href }: { image: string; href: string }) {
  return (
    <button
      className='cursor-pointer outline-none'
      onClick={() => window.open(href, '_blank')}
    >
      <img
        src={image}
        className='shadow-tile size-full rounded-xl object-cover object-center'
      />
    </button>
  );
}

function CardTextItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='flex size-full flex-col'>
      <p className='font-medium'>{title}</p>
      <p className='text-sm font-light'>{description}</p>
    </div>
  );
}
Card.Header = CardHeader;
Card.ImageItem = CardImageItem;
Card.LinkItem = CardLinkItem;
Card.TextItem = CardTextItem;
