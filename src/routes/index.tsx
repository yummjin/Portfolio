import { createFileRoute, redirect } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

import {
  HACKATHONS,
  PATH,
  PROJECTS,
  SHORTCUTS,
  SKILLS,
} from '@/shared/constants';
import { getSession } from '@/shared/utils';
import { Profile, Wallpaper1 } from '@/assets/images';
import {
  CodeIcon,
  HackathonIcon,
  OrganizationIcon,
  ProjectIcon,
} from '@/assets/icons';
import { Card, InfoSection } from '@/widgets/home/ui';

export const Route = createFileRoute('/')({
  component: App,
  beforeLoad: () => {
    const isAuthenticated = getSession('isAuthenticated');
    if (!isAuthenticated) {
      throw redirect({
        to: PATH.LOGIN,
      });
    }
  },
});

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = Wallpaper1;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className='scrollbar-hide absolute inset-0 flex size-full flex-col overflow-scroll'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className='h-fit w-full bg-cover bg-center'
        style={{ backgroundImage: `url(${Wallpaper1})` }}
      >
        <div className='m-auto flex h-full w-[345px] flex-col flex-wrap items-center gap-8 pt-[calc(44px+60px)] pb-20 md:grid md:w-[690px] md:grid-cols-2 lg:flex lg:w-[1020px] lg:flex-row'>
          <Card href={PATH.USER} noButton className='justify-between p-[30px]'>
            <img
              src={Profile}
              alt='profile'
              className='shadow-tile size-30 rounded-full object-cover'
            />
            <div className='flex flex-col'>
              <p className='mb-1 text-4xl font-semibold'>한유진</p>
              <p className='mb-2 font-normal text-gray-500'>
                cho4u4o@gmail.com
              </p>
              <b>Frontend Developer</b>
            </div>
          </Card>
          <Card href={PATH.TECH} noButton flex>
            <Card.Header
              icon={CodeIcon}
              title='기술'
              description='사용 기술 • 프레임워크'
            />
            <div className='grid flex-1 grid-cols-2 grid-rows-2 lg:grid-cols-4'>
              {SKILLS.slice(0, 4).map(skill => (
                <Card.ImageItem key={skill.title} image={skill.image} />
              ))}
              <div className='hidden lg:contents'>
                {SKILLS.slice(4, 8).map(skill => (
                  <Card.ImageItem key={skill.title} image={skill.image} />
                ))}
              </div>
            </div>
          </Card>
          <Card href={PATH.PROJECT} flex>
            <Card.Header
              icon={ProjectIcon}
              title='프로젝트'
              description='참여한 프로젝트 • 클릭시 이동'
            />
            <div className='flex-1 bg-white px-14 py-5'>
              <div className='grid h-full grid-cols-1 grid-rows-3 gap-2 divide-y-[1px] divide-gray-300 lg:hidden'>
                {PROJECTS.slice(0, 3).map(project => (
                  <Card.TextItem
                    key={project.title}
                    title={project.title}
                    description={project.description}
                  />
                ))}
              </div>
              <div className='hidden h-full grid-cols-2 grid-rows-3 gap-2 gap-x-6 divide-y-[1px] divide-gray-300 lg:grid'>
                {PROJECTS.slice(0, 6).map(project => (
                  <Card.TextItem
                    key={project.title}
                    title={project.title}
                    description={project.description}
                  />
                ))}
              </div>
            </div>
          </Card>
          <Card href={PATH.HACKATHON}>
            <Card.Header
              icon={HackathonIcon}
              title='해커톤'
              description='참여한 대회 • 수상'
            />
            <div className='grid flex-1 grid-cols-1 grid-rows-3 gap-2 divide-y-[1px] divide-gray-300 bg-white px-10 py-5'>
              {HACKATHONS.map(hackathon => (
                <Card.CheckItem
                  key={hackathon.title}
                  title={hackathon.title}
                  description={hackathon.description}
                />
              ))}
            </div>
          </Card>
          <Card noButton hoverNone>
            <div className='grid size-full grid-cols-4 grid-rows-4 gap-4 px-6 py-5'>
              {SHORTCUTS.map(shortcut => (
                <Card.LinkItem
                  key={shortcut.title}
                  href={shortcut.href}
                  image={shortcut.image}
                />
              ))}
            </div>
          </Card>
          <Card href={PATH.ORGANIZATION} flex>
            <Card.Header
              icon={OrganizationIcon}
              title='조직'
              description='참여한 조직'
            />
            <div className='grid flex-1 grid-cols-2 grid-rows-2 bg-white lg:grid-cols-4'></div>
          </Card>
        </div>
      </motion.div>
      <div className='w-full flex-shrink-0 bg-white'>
        <InfoSection />
      </div>
    </div>
  );
}
