import Image from 'next/image';
import Me from '/assets/avatar.svg'


export const Hero = () => {
    return (
        <section className=" h-[calc(100vh-5rem)] flex flex-col justify-start mt-20">
            <div className="container flex flex-col items-center text-primary pt-44 ">
                <h1 className="mb-4">Hi, I'm Maximilian</h1>
                <h5 className="mb-8">welcome to my website</h5>
                <Image className={'rounded-full'} src={Me} width={200} height={200} alt="Profile"/>

                <h4>Revolver</h4>
            </div>
        </section>
    )
}