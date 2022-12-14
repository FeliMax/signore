import { Icon } from '../Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import content from '../../public/content/header.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SmoothScrollLink from '../SmoothScrollLink';
import { useState } from 'react';
import { Logo } from '../Logo';

interface NavbarItem {
    text?: string;
    icon?: IconProp;
    url?: string;
}

interface HeaderContent {
    logo: string;
    items: NavbarItem[];
}

export const Header = () => {
    const headerContent = content as HeaderContent;
    const [open, setOpen] = useState<boolean>(false);

    const toggleIsOpen = (): void => {
        setOpen(prevState => !prevState);
    };

    return (
        <header className="fixed z-20 h-fit w-full bg-white px-2 shadow-md">
            <nav className="container flex items-center justify-between gap-12 text-gray-500">
                <SmoothScrollLink to="/" className="py-2 hover:cursor-pointer">
                    <Logo />
                </SmoothScrollLink>
                <ul
                    className={
                        ' font-bold md:flex md:flex-row ' +
                        (open
                            ? 'opacity-1 absolute inset-0 top-full flex h-screen max-h-[100vh] flex-col items-start gap-8 overflow-hidden bg-white bg-gray-200 px-8 pt-12 duration-700 ease-in-out'
                            : 'max-h-0 overflow-hidden font-bold md:gap-12 md:overflow-visible')
                    }
                >
                    {headerContent.items.map((item, index: number) => {
                        return (
                            <li
                                className="group flex cursor-pointer items-center gap-2 text-xl duration-100 hover:text-secondary"
                                key={index}
                            >
                                <SmoothScrollLink
                                    to={item.url ?? ''}
                                    className="flex space-x-2"
                                    onClick={open ? toggleIsOpen : undefined}
                                >
                                    <FontAwesomeIcon
                                        className="h-6 w-6 duration-700 group-hover:rotate-[360deg]"
                                        icon={item.icon as IconProp}
                                    />
                                    <span>{item.text}</span>
                                </SmoothScrollLink>
                            </li>
                        );
                    })}
                </ul>
                <button className="block md:hidden" onClick={toggleIsOpen}>
                    <Icon
                        className={'h-8 w-8'}
                        iconName={!open ? 'bars' : 'x'}
                    />
                </button>
            </nav>
        </header>
    );
};
