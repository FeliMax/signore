import ExportedImage from 'next-image-export-optimizer';
import NextLogo from 'assets/next-logo.png';
import { IconList } from '../IconList';
import SmoothScrollLink from '../SmoothScrollLink';
import { Logo } from '../Logo';
import { IconProps } from '../Icon';
import content from '../../public/content/footer.json';

// example data

interface FooterContent {
    iconList: IconProps[];
    copyrightNotice: string;
}

export const Footer = () => {
    const footerContent = content as FooterContent;

    return (
        <section className="py-8">
            <div className="container flex flex-col items-center gap-4">
                <SmoothScrollLink to="/" className="hover:cursor-pointer">
                    <Logo />
                </SmoothScrollLink>
                <IconList
                    icons={footerContent.iconList}
                    className="gap-8 py-6 text-primary"
                    iconClassName="w-10 h-10 hover:scale-105 duration-300 hover:text-secondary"
                />
                <p className="text-center text-sm">
                    {footerContent.copyrightNotice}
                </p>
                <div className="flex items-center gap-2">
                    <p className="text-sm">Powered by</p>
                    <ExportedImage
                        alt="Next Logo"
                        className="h-8 w-auto"
                        src={NextLogo}
                        placeholder="empty"
                    />
                </div>
            </div>
        </section>
    );
};
