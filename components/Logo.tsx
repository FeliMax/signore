import ExportedImage from 'next-image-export-optimizer';
import LogoImage from 'public/images/logo.svg';

export const Logo = () => {
    return (
        <ExportedImage
            alt="Logo"
            className="transition:all h-10 w-auto duration-300 hover:scale-105"
            src={LogoImage}
            placeholder="empty"
        />
    );
};
