import {ProjectCard} from '../ProjectCard/ProjectCard';
import content from '../../public/content/projects.json';

export interface IconReference {
    icon: string;
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

    console.log("read projects", projects);
    

    return (
        <section className="bg-primary py-24">
            <div className="container">
                <h2 className="text-white mb-24">Projects (Icon for Projects)</h2>

                <div className="flex flex-wrap gap-24 justify-start mx-auto">
                    {projects.map((project: ProjectContent) => (<ProjectCard key={project.name} {...project} />))}
                </div>


            </div>
        </section>
    )
}