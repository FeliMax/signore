import ExportedImage from 'next-image-export-optimizer';
import content from '../../public/content/hero.json';
import { IconList } from '../IconList';
import { IconProps } from '../Icon';
import { icons } from './Footer';

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
        <section id="/" className=" flex h-[100vh] flex-col justify-start">
            <div className="container flex flex-col items-center pt-44 text-primary ">
                <h1 className="mb-4 font-bold">{heroContent.title}</h1>
                <h5 className="mb-8">{heroContent.subtitle}</h5>
                {heroContent.imageUrl !== undefined && (
                    <div className="min-w-auto relative h-64 w-64">
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
                    icons={icons}
                    iconClassName="h-12 w-12"
                    className="my-12 gap-10"
                />
                <h4>{heroContent.tags.join(' ')}</h4>
            </div>
        </section>
    );
};
