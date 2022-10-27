import Image from 'next/image';
import Me from '/assets/me.jpeg'


export const Hero = () => {
    return (
        <section className=" h-[calc(100vh-5rem)] flex flex-col justify-start bg-primary mt-20">
            <div className="container flex flex-col items-center text-white pt-44 ">
                <h1 className="mb-4">Hi, Im Maximilian</h1>
                <h5 className="mb-8">and I am a web developer</h5>
                <Image className={'rounded-full'} src={Me} width={150} height={150} alt="Profile"/>
            </div>
        </section>
    )
}