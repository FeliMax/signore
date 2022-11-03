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
        <article className="relative bg-white overflow-hidden min-h-[20rem] w-[18rem] rounded-lg p-4 md:hover:scale-110 duration-300">
            <IconList
                icons={references}
                className="flex gap-3 absolute top-0 right-0 z-10 p-2"
                iconClassName="w-6 h-6 text-gray-700  xl:hover:scale-110 hover:text-gray-500"
            />
            <p className="absolute top-0 left-0 z-10 p-2 font-bold">{year}</p>
            <div className="absolute top-0 h-[6rem] inset-0 bg-gray-300"></div>

            <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 mt-4 z-10">
                    <Image
                        className="object-contain"
                        src={Me}
                        alt="Project image"
                    />
                </div>
                <div className="text-center mt-auto px-8 pb-8 ">
                    <h6>{name?.toUpperCase()}</h6>
                    <p className="text-gray-500 ">{description}</p>
                </div>
                <div className="text-sm absolute bottom-0 right-0 bg-gray-300 pl-4 pr-2 py-1">
                    {type}
                </div>
            </div>
        </article>
    );
};
