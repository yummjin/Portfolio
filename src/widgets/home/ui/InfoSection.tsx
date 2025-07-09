import type { ReactNode } from 'react';

import { ChevronLeftIcon } from '@/assets/icons';
import { INFO_ITEMS } from '@/shared/constants';

interface InfoItemProps {
  href: string;
  title: string;
  image?: string;
  imageAlt?: string;
  description: ReactNode;
  description2: string;
}

export default function InfoSection() {
  return (
    <div className='m-auto flex h-full w-[345px] flex-wrap items-center justify-between gap-10 pt-30 pb-40 md:w-[690px] lg:w-[1020px]'>
      {INFO_ITEMS.map((item, idx) => (
        <InfoItem key={idx} {...item} />
      ))}
    </div>
  );
}

const InfoItem = ({
  href,
  title,
  description,
  description2,
  image,
  imageAlt,
}: InfoItemProps) => {
  const onClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
  };
  return (
    <div className='flex h-[220px] w-[275px] flex-col'>
      <button
        onClick={onClick}
        className='mb-4 flex w-fit cursor-pointer items-center gap-2 rounded-[11px] px-3 py-2.5 text-4xl font-semibold transition duration-150 outline-none hover:bg-gray-400/20'
      >
        {title} <img src={ChevronLeftIcon} className='w-4 opacity-50' />
      </button>
      <div className='flex flex-col gap-2 px-3'>
        <div className='flex items-center gap-4'>
          {image && <img src={image} className='h-12' alt={imageAlt} />}
        </div>
        <div className='text-lg'>{description}</div>
        {description2 && (
          <div className='text-sm text-gray-500'>{description2}</div>
        )}
      </div>
    </div>
  );
};
