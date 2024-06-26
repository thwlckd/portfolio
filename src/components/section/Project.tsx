'use client';

import Image, { StaticImageData } from 'next/image';
import { Children, HTMLAttributes, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useRefObserver from '@/hooks/useRefObserver';
import { Modal } from '../common/Modal';
import type { Project } from '@/types';
import PROJECTS from '@/constants/project';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: Partial<Project>;
}

export default function Project() {
  const projectRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [project, setProject] = useState<Project>();

  useRefObserver(projectRef);

  return (
    <>
      <motion.section
        id="project"
        className="grid min-h-screen grid-cols-1 content-center gap-10 py-[100px] pr-[50px] sm:pr-[100px] md:grid-cols-2 lg:grid-cols-3 lg:pr-[200px]"
        ref={projectRef}
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
      >
        {Children.toArray(
          PROJECTS.map((project, i) => (
            <a className="mx-auto w-fit">
              <ProjectCard
                project={project}
                onClick={() => {
                  setIsOpenModal((prev) => !prev);
                  setProject(() => PROJECTS[i]);
                }}
              />
            </a>
          )),
        )}
      </motion.section>
      <AnimatePresence>
        {isOpenModal && project && (
          <Modal
            isOpen={isOpenModal}
            setOpen={setIsOpenModal}
            project={project}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
    >
      <div className="overflow-hidden rounded-xl shadow-md">
        <Image
          className="aspect-[4/3] transition-all hover:scale-110"
          src={project.thumbnail as StaticImageData}
          width={320}
          height={240}
          alt="thumbnail"
          placeholder="blur"
        />
      </div>
      <h2 className="mt-3 line-clamp-1 text-lg font-bold">{project.name}</h2>
      <p className="mt-2 line-clamp-1 max-w-[320px]">{project.summary}</p>
    </motion.div>
  );
};
