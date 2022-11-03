import Image from 'next/image';
import LogoImage from 'assets/logo.svg';

export const Logo = () => {
    return <Image alt="Logo" className="h-10 w-auto" src={LogoImage} />;
};
