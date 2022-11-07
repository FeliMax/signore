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
        <article className="relative z-10 min-h-[20rem] w-[18rem] rounded-lg bg-white py-4 shadow-md duration-300 md:hover:scale-105 md:hover:shadow-lg">
            <p className="absolute top-0 left-0 z-10  p-2 font-bold">{year}</p>
            <div className="absolute inset-0 top-0 h-[6rem] rounded-t-lg bg-gray-300"></div>

            <div className="flex flex-col items-center gap-4">
                <div className="z-10 mt-4 h-24 w-24">
                    <Image
                        className="object-contain"
                        src={Me}
                        alt="Project image"
                    />
                </div>
                <div className="mt-auto px-8 pb-8 text-center ">
                    <h6 className="mb-2">{name?.toUpperCase()}</h6>
                    <p className="text-gray-500 ">{description}</p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg bg-gray-300 py-1 px-2 text-sm">
                {type}
            </div>
            <IconList
                icons={references}
                className="absolute top-0 right-0 z-10 flex gap-3 p-2"
                iconClassName="w-6 h-6 text-gray-700  xl:hover:scale-110 hover:text-gray-500"
            />
        </article>
    );
};
