import ExportedImage from 'next-image-export-optimizer';
import content from '../../public/content/hero.json';
import { IconList } from '../IconList';
import { IconProps } from '../Icon';

interface HeroContent {
    title: string;
    subtitle: string;
    imageUrl?: string;
    iconList: IconProps[];
    tags: string[];
}

export const Hero = () => {
    const heroContent = content as HeroContent;

    return (
        <section id="/" className=" flex min-h-[100vh] flex-col justify-start">
            <div className="container flex flex-col items-center pt-24 text-primary md:pt-44 ">
                <h1 className="mb-4 text-center font-bold">
                    {heroContent.title}
                </h1>
                <h5 className="mb-8 text-center">{heroContent.subtitle}</h5>
                {heroContent.imageUrl !== undefined && (
                    <div className="min-w-auto relative h-64 w-64 overflow-clip rounded-full">
                        <ExportedImage
                            src={heroContent.imageUrl}
                            alt="Profile"
                            fill={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder="empty"
                        />
                    </div>
                )}
                <IconList
                    icons={heroContent.iconList}
                    className="my-12 gap-10 text-primary"
                    iconClassName="h-12 w-12 hover:scale-105 duration-300 hover:text-secondary"
                />
                <h4 className="pb-8">{heroContent.tags.join(' ')}</h4>
            </div>
        </section>
    );
};
