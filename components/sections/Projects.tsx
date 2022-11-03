import { ProjectCard } from '../ProjectCard';
import content from '../../public/content/projects.json';
import { Icon, IconProps } from '../Icon';

export interface ProjectContent {
    name: string;
    description: string;
    year: number;
    type: string;
    references: IconProps[];
}

export const Projects = () => {
    const projects = content as ProjectContent[];
    return (
        <section id="projects" className="bg-primary py-12 md:py-24">
            <div className="container">
                <div className="flex gap-2 md:gap-4 mb-12 md:mb-20 text-white">
                    <Icon
                        iconName="code"
                        className="w-10 md:w-12 h-10 md:h-12"
                    />
                    <h2>Projects</h2>
                </div>
                <div className="flex flex-col items-center md:flex-row md:flex-wrap md:items-stretch gap-8 md:gap-16 mx-auto">
                    {projects.map((project: ProjectContent, index: number) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
