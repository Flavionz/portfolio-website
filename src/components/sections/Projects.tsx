import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink: string;
  demoLink: string;
  githubLabel: string;
  demoLabel: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                   title,
                                                   description,
                                                   tags,
                                                   image,
                                                   githubLink,
                                                   demoLink,
                                                   githubLabel,
                                                   demoLabel
                                                 }) => {
  return (
      <Card className="flex flex-col h-full">
        <div className="aspect-video w-full overflow-hidden">
          <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
                <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs font-medium"
                >
              {tag}
            </span>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={() => window.open(githubLink, '_blank')}
            >
              <GithubIcon className="h-4 w-4" />
              <span>{githubLabel}</span>
            </Button>
            <Button
                size="sm"
                className="flex items-center gap-1"
                onClick={() => window.open(demoLink, '_blank')}
            >
              <ExternalLinkIcon className="h-4 w-4" />
              <span>{demoLabel}</span>
            </Button>
          </div>
        </div>
      </Card>
  );
};

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = t('projects.items', {
    returnObjects: true
  }) as Array<{
    title: string;
    description: string;
    tags: string[];
    links: {
      github: string;
      demo: string;
    };
    githubLabel?: string;
    demoLabel?: string;
  }>;

  // Project images from Unsplash
  const projectImages = [
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  ];

  return (
      <Section
          id="projects"
          title={t('projects.title')}
          className="bg-white dark:bg-gray-900"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={projectImages[index % projectImages.length]}
                  githubLink={project.links.github}
                  demoLink={project.links.demo}
                  githubLabel={project.githubLabel || "GitHub"}
                  demoLabel={project.demoLabel || "Demo"}
              />
          ))}
        </div>
      </Section>
  );
};