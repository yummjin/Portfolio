import { motion } from 'motion/react';

const timeline = [
  { year: '2022', event: '성지고 졸업' },
  { year: '2023', event: '경기대학교 컴퓨터공학전공 입학' },
];

export default function Timeline() {
  return (
    <div className='relative w-[345px] max-w-4xl p-4'>
      <div className='absolute top-1/2 right-0 left-0 h-px bg-gray-300' />
      <div className='relative flex justify-between'>
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <div className='z-10 size-4 rounded-full bg-black' />
            <div className='mt-2 text-center'>
              <div className='font-bold'>{item.year}</div>
              <div>{item.event}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
