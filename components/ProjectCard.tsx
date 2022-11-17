import ExportedImage from 'next-image-export-optimizer';
import { ProjectContent } from './sections/Projects';
import { IconList } from './IconList';

export const ProjectCard = ({
    name,
    description,
    year,
    type,
    references,
}: ProjectContent) => {
    return (
        <article className="relative z-10 min-h-[20rem] rounded-lg bg-white py-4 shadow-md duration-300 md:w-[30%] md:hover:scale-105 md:hover:shadow-lg">
            <p className="absolute top-0 left-0 z-10 p-2 text-lg font-bold">
                {year}
            </p>
            <div className="absolute inset-0 top-0 h-[6rem] rounded-t-lg bg-gray-300"></div>
            <div className="flex flex-col items-center gap-4">
                <div className="relative z-10 mt-4 h-24 w-24">
                    <ExportedImage
                        className="object-contain"
                        src="./images/avatar.svg"
                        alt="Project image"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="empty"
                    />
                </div>
                <div className="mt-auto mb-12 px-8 text-center">
                    <h5 className="mb-2">{name?.toUpperCase()}</h5>
                    <p className="text-xl font-semibold text-gray-500 line-clamp-5">
                        {description}
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg bg-gray-300 py-1 px-2 text-base font-semibold">
                {type}
            </div>
            <IconList
                icons={references}
                className="absolute top-0 right-0 z-10 flex gap-3 p-2"
                iconClassName="w-7 h-7 text-gray-700  xl:hover:scale-110 hover:text-gray-500"
            />
        </article>
    );
};
