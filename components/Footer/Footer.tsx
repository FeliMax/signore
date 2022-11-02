import Image from 'next/image';
import NextLogo from 'assets/next-logo.png';
import { IconList } from '../IconList/IconList';
import SmoothScrollLink from '../SmoothScrollLink';
import { Logo } from '../Logo/Logo';
import { iconProps } from '../Icon/Icon';

// example data

const icons: iconProps[] = [
    {
        iconName: 'fab fa-github',
        url: 'github.com',
    },
    {
        iconName: 'fab fa-linkedin',
        url: 'linkedin.com',
    },
    {
        iconName: 'fab fa-gitlab',
        url: 'gitlab.com',
    },
];

export const Footer = () => {
    return (
        <section className="py-8">
            <div className="container flex flex-col items-center ">
                <SmoothScrollLink to="/" className="hover:cursor-pointer">
                    <Logo />
                </SmoothScrollLink>
                <IconList icons={icons} className="gap-8 text-gray-500 py-6" />
                <p className="text-sm">{`${new Date().getFullYear()} Made by Maximilian Stelzl and Felix Wielander`}</p>
                <div className="flex items-center gap-2">
                    <p className="text-sm">Powered by</p>
                    <Image
                        alt="Next Logo"
                        width={75}
                        height={50}
                        src={NextLogo}
                    />
                </div>
            </div>
        </section>
    );
};
