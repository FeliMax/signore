import { ProjectCard } from '../ProjectCard';
import content from '../../public/content/projects.json';
import { Icon, IconProps } from '../Icon';

export interface ProjectContent {
    name: string;
    description: string;
    image: string;
    year: number;
    type: string;
    references: IconProps[];
}

export const Projects = () => {
    const projects = content as ProjectContent[];
    return (
        <section id="projects" className="bg-primary py-12 md:py-24">
            <div className="container">
                <div className="mb-12 flex gap-2 text-white md:mb-20 md:gap-4">
                    <Icon
                        iconName="code"
                        className="h-10 w-10 md:h-12 md:w-12"
                    />
                    <h2>Projects</h2>
                </div>
                <div className="mx-auto flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:items-stretch md:gap-14">
                    {projects.map((project: ProjectContent, index: number) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
