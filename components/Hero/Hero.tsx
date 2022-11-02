import Image from 'next/image';
import Me from '/assets/avatar.svg'
import content from '../../public/content/hero.json';

interface HeroContent {
    title: string;
    subtitle: string;
    tags: string[];
}

export const Hero = () => {
    const heroContent = content as HeroContent;

    return (
        <section id="/" className=" h-[100vh] flex flex-col justify-start">
            <div className="container flex flex-col items-center text-primary pt-44 ">
                <h1 className="mb-4">{heroContent.title}</h1>
                <h5 className="mb-8">{heroContent.subtitle}</h5>
                <Image src={Me}  alt="Profile"/>

                <h4 className="mt-12">{heroContent.tags.join(" ")}</h4>
            </div>
        </section>
    )
}