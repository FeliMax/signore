import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import {useContentFromFile} from '../../hooks/useContentFromFile';
import Me from '/assets/me.jpeg'
import {Icon} from '../Icon/Icon';

export const AboutMe = () => {
    const content = useContentFromFile('content/about.md');

    return (
        <>
            <section className="pb-40 md:pb-64 pt-12 lg:pt-24 bg-secondary">
                <div className="container">
                    <div className="flex items-end gap-2 text-white mb-4 lg:mb-12">
                        <Icon iconName="person" className="h-8 md:h-10 w-8 md:w-10 mb-2 hover:scale-110"/>
                        <h2>About me</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between ">
                        <div className="w-full lg:w-1/2 text-3xl text-white lg:mb-0 mb-8 ">
                            <ReactMarkdown className="prose text-white">{content}</ReactMarkdown>
                        </div>
                        <div
                            className=" lg:block relative self-center after:hidden lg:after:block lg:after:content-[''] after:ml-6 after:top-4 after:-mr-6 after:-mb-6 after-w-full after:inset-0 after:absolute after:border-4 after:border-white ">
                            <Image
                                className="object-cover z-10 relative md:hover:scale-110 md:hover:transition duration-300 delay-100"
                                src={Me}
                                alt="Profile"/>
                        </div>
                    </div>


                </div>

            </section>


        </>
    )
}