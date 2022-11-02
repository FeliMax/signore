import Image from 'next/image';
import LogoImage from 'assets/logo.svg';

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            alt="Logo"
            className={className}
            height={50}
            width={100}
            src={LogoImage}
        />
    );
};
