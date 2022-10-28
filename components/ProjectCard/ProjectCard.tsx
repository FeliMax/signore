import Image from 'next/image';
import Me from '/assets/avatar.svg'


export const ProjectCard = () => {
    return (
        <article
            className="relative bg-white overflow-hidden flex flex-col items-center gap-6 min-h-[20rem] w-[18rem] rounded-lg p-4 hover:-translate-y-4 duration-300">
            <div className="absolute top-0 right-0 z-10 p-1">
                Icons und
            </div>
            <p className="absolute top-0 left-0 z-10 p-1 font-bold">
               2021
            </p>
            <div className="absolute top-0 h-[6rem] inset-0 bg-gray-300"></div>
            <div className="w-24 h-24 mt-6">
                <Image objectFit="cover" className="pt-8" src={Me} alt="Project image"/>
            </div>
            <div className="text-center px-8 pb-8 ">
                <h6>WATTENZÄHLER</h6>
                <p className="text-sm text-gray-500 ">
                    Point counter for the South Tyrolean card game Watten. (Now replaced by Bleckl)
                    Point counter for the South Tyrolean card game Watten. (Now replaced by Bleckl)
                    Point counter for the South Tyrolean card game Watten. (Now replaced by Bleckl)
                </p>
            </div>

            <div className="absolute bottom-0 right-0 bg-gray-300 p-1">Flutter Package</div>
        </article>
    )
}