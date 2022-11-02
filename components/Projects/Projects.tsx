import { ProjectCard } from '../ProjectCard/ProjectCard';
import content from '../../public/content/projects.json';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '../Icon/Icon';

export interface IconReference {
    icon: IconProp;
    url: string;
    tooltip: string;
}

export interface ProjectContent {
    name: string;
    description: string;
    year: number;
    type: string;
    references: IconReference[];
}

export const Projects = () => {
    const projects = content as ProjectContent[];
    return (
        <section id="projects" className="bg-primary py-24">
            <div className="container">
                <div className="flex gap-4 text-white">
                    <Icon
                        iconName="code"
                        className="w-10 md:w-12 h-10 md:h-12"
                    />
                    <h2 className="text-white mb-24">Projects</h2>
                </div>
                <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-16 mx-auto">
                    {projects.map((project: ProjectContent) => (
                        <ProjectCard key={project.name} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
