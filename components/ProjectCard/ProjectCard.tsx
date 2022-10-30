import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { IconReference, ProjectContent } from '../Projects/Projects';
import Me from '/assets/avatar.svg'


export const ProjectCard = ({name, description, year, type, references}: ProjectContent) => {
    return (
        <article
            className="relative bg-white overflow-hidden flex flex-col items-center gap-6 min-h-[20rem] w-[18rem] rounded-lg p-4 hover:-translate-y-4 duration-300">
            <div className="absolute top-0 right-0 z-10 p-1">
                {references?.map((reference: IconReference) => (
                    <a key={reference.url} href={reference.url} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="w-6 h-6 hover:scale-105" icon={reference.icon}/>
                    </a>
                ))}
            </div>
            <p className="absolute top-0 left-0 z-10 p-1 font-bold">
               {year}
            </p>
            <div className="absolute top-0 h-[6rem] inset-0 bg-gray-300"></div>
            <div className="w-24 h-24 mt-6">
                <Image className="pt-8 object-contain" src={Me} alt="Project image"/>
            </div>
            <div className="text-center px-8 pb-8 ">
                <h6>{name?.toUpperCase()}</h6>
                <p className="text-sm text-gray-500 ">
                    {description}
                </p>
            </div>

            <div className="absolute bottom-0 right-0 bg-gray-300 p-1">{type}</div>
        </article>
    )
}