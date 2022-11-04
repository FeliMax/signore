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
            className="pb-24 md:pb-40 pt-12 lg:pt-24 bg-secondary"
        >
            <div className="container">
                <div className="flex items-end gap-2 text-white mb-4 lg:mb-10">
                    <Icon
                        iconName="person"
                        className="h-8 md:h-10 w-8 md:w-10 mb-2 hover:scale-110"
                    />
                    <h2>About me</h2>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between ">
                    <div className="w-full lg:w-1/2 text-3xl text-white lg:mb-0 mb-8 ">
                        <ReactMarkdown className="prose text-white">
                            {content}
                        </ReactMarkdown>
                    </div>
                    <div className="lg:block overflow-hidden relative self-center">
                        <Image
                            className="relative object-cover z-10  md:hover:scale-110 md:hover:transition duration-300 delay-100"
                            src={Me}
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
