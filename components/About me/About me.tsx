import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useContentFromFile } from '../../hooks/useContentFromFile';
import Me from '/assets/me.jpeg'

export const AboutMe = () => {
    const content = useContentFromFile("content/about.md");

    return (
        <>
        <section className="pb-40 xl:pb-56 pt-12 lg:pt-24 bg-secondary">
            <div className="container">
                <h2 className="text-white mb-4 lg:mb-12">About me (ManIcon)</h2>
                <div className="flex flex-col lg:flex-row lg:justify-between ">
                    <div className="lg:w-1/2  text-white mb-8 lg:mb-0">
                        <ReactMarkdown className="space-y-6">{content}</ReactMarkdown>
                    </div>

                    <div className=" lg:block relative self-center after:hidden lg:after:block lg:after:content-[''] after:ml-6 after:top-4 after:-mr-6 after:-mb-6 after-w-full after:inset-0 after:absolute after:border-4 after:border-white ">

                    <Image className="object-cover z-10 relative hover:scale-110 hover:transition duration-300 delay-100" src={Me}  alt="Profile"/>
                    </div>
                </div>



            </div>

        </section>


    </>
    )
}