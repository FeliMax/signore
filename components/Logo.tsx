import ExportedImage from 'next-image-export-optimizer';
import LogoImage from 'assets/logo.svg';

export const Logo = () => {
    return (
        <ExportedImage
            alt="Logo"
            className="h-10 w-auto"
            src={LogoImage}
            placeholder="empty"
        />
    );
};
