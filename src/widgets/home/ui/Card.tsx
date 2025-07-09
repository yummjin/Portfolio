import { motion } from 'motion/react';

import type { ReactNode } from 'react';
import { cn } from '@/shared/utils';
import { MoreIcon } from '@/assets/icons';

interface CardProps {
  hoverNone?: boolean;
  flex?: boolean;
  children?: ReactNode;
  className?: string;
  noButton?: boolean;
}

export default function Card({
  flex,
  children,
  className,
  hoverNone,
  noButton = false,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-tile-bg/90 shadow-tile relative h-[330px] w-[329px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[11px] lg:min-w-[329px]',
        flex && 'lg:flex-1',
      )}
      whileHover={hoverNone ? {} : { scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {!noButton && (
        <button className='absolute bottom-4 left-4 cursor-pointer rounded-[11px] p-2 transition duration-150 outline-none hover:bg-gray-400/20'>
          <img src={MoreIcon} className='size-4' />
        </button>
      )}
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
    <div className='flex h-fit w-full overflow-hidden px-3 py-2.5'>
      <div className='flex h-fit w-full gap-[20px] rounded-[11px] px-3 py-2.5 transition duration-150 hover:bg-gray-400/20'>
        <img src={icon} className='size-[48px] flex-shrink-0 rounded-[11px]' />
        <div className='flex flex-col'>
          <span className='text-2xl font-semibold'>{title}</span>
          <span className='text-nowrap text-ellipsis text-gray-500'>
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}

function CardImageItem({ image }: { image: string }) {
  return <img src={image} className='size-full object-cover object-center' />;
}

function CardLinkItem({ image, href }: { image: string; href: string }) {
  return (
    <motion.button
      className='cursor-pointer outline-none'
      onClick={() => window.open(href, '_blank')}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1.04 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <img
        src={image}
        className='shadow-tile size-full rounded-xl object-cover object-center'
      />
    </motion.button>
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

function CardCheckItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='flex size-full items-start gap-2'>
      <label className='custom-checkbox mt-1 w-7'>
        <input type='checkbox' />
        <span className='checkmark'></span>
      </label>
      <div className='flex flex-col'>
        <p className='font-medium'>{title}</p>
        <p className='text-sm font-light'>{description}</p>
      </div>
    </div>
  );
}
Card.Header = CardHeader;
Card.ImageItem = CardImageItem;
Card.LinkItem = CardLinkItem;
Card.TextItem = CardTextItem;
Card.CheckItem = CardCheckItem;
