import Image from 'next/image';
import Me from '/assets/avatar.svg'


export const Hero = () => {
    return (
        <section className=" h-[calc(100vh-5rem)] flex flex-col justify-start mt-20">
            <div className="container flex flex-col items-center text-primary pt-44 ">
                <h1 className="mb-4">Hi, I'm Maximilian</h1>
                <h5 className="mb-8">welcome to my website</h5>
                <Image className={' bg-red-200'} src={Me}  alt="Profile"/>

                <h4 className="mt-12">Revolver snf above some Icons to Github or linkedin </h4>
            </div>
        </section>
    )
}