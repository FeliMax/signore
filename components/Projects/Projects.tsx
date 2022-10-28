import {ProjectCard} from '../ProjectCard/ProjectCard';


export const Projects = () => {
    return (
        <section className="bg-primary py-24">
            <div className="container">
                <h2 className="text-white mb-24">Projects (Icon for Projects)</h2>

                <div className="flex flex-wrap gap-24 justify-start mx-auto">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>


            </div>
        </section>
    )
}