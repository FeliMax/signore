import Image from 'next/image';
import { ProjectContent } from './sections/Projects';
import Me from 'assets/avatar.svg';
import { IconList } from './IconList';

export const ProjectCard = ({
    name,
    description,
    year,
    type,
    references,
}: ProjectContent) => {
    return (
        <article className="relative min-h-[20rem] w-[18rem] overflow-hidden rounded-lg bg-white p-4 duration-300 md:hover:scale-110">
            <IconList
                icons={references}
                className="absolute top-0 right-0 z-10 flex gap-3 p-2"
                iconClassName="w-6 h-6 text-gray-700  xl:hover:scale-110 hover:text-gray-500"
            />
            <p className="absolute top-0 left-0 z-10 p-2 font-bold">{year}</p>
            <div className="absolute inset-0 top-0 h-[6rem] bg-gray-300"></div>

            <div className="flex flex-col items-center gap-4">
                <div className="z-10 mt-4 h-24 w-24">
                    <Image
                        className="object-contain"
                        src={Me}
                        alt="Project image"
                    />
                </div>
                <div className="mt-auto px-8 pb-8 text-center ">
                    <h6>{name?.toUpperCase()}</h6>
                    <p className="text-gray-500 ">{description}</p>
                </div>
                <div className="absolute bottom-0 right-0 bg-gray-300 py-1 pl-4 pr-2 text-sm">
                    {type}
                </div>
            </div>
        </article>
    );
};
