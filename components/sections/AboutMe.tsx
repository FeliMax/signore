import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useContentFromFile } from '../../hooks/useContentFromFile';
import Me from 'assets/me.jpeg';
import { Icon } from '../Icon';

export const AboutMe = () => {
    const content = useContentFromFile('content/about.md');

    return (
        <section
            id="about"
            className="bg-primary pb-12 pt-12 md:pb-20 lg:pt-24"
        >
            <div className="container">
                <div className="mb-4 flex items-end gap-2 text-white lg:mb-10">
                    <Icon
                        iconName="person"
                        className="mb-2 h-8 w-8 hover:scale-110 md:h-10 md:w-10"
                    />
                    <h2>About me</h2>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between ">
                    <div className="mb-8 w-full text-3xl text-white lg:mb-0 lg:w-1/2 ">
                        <ReactMarkdown className="prose text-white">
                            {content}
                        </ReactMarkdown>
                    </div>
                    <div className="relative self-center overflow-hidden lg:block">
                        <Image
                            className="relative z-10 object-cover  delay-100 duration-300 md:hover:scale-110 md:hover:transition"
                            src={Me}
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
