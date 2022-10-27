import Image from 'next/image';
import Logo from '/assets/logo.svg'
import NextLogo from '/assets/next-logo.png'

export const Footer = () => {
    return (
        <section className="py-12">
            <div className="container flex flex-col items-center gap-2">
                <Image alt="Logo" className="" height={50} width={127} src={Logo}/>

                <p>{`${new Date().getFullYear()} Maximilian Stelzl`}</p>
                <div>
                    IconList with Github Linkedin and Gitlab
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-sm">Powered by</p>
                    <Image alt="Next Logo" className="h-8 w-8" width={75} height={50} src={NextLogo} />
                </div>

            </div>
        </section>
    );
}