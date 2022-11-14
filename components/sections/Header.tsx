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

    const setIsOpen = (): void => {
        setOpen(prevState => !prevState);
    };

    return (
        <header className="fixed z-20 h-fit w-full bg-white px-2 shadow-md">
            <nav className=" container flex items-center justify-between gap-12 text-gray-500">
                <SmoothScrollLink to="/" className="hover:cursor-pointer">
                    <Logo />
                </SmoothScrollLink>
                <ul
                    className={
                        'py-4 font-bold md:flex md:flex-row ' +
                        (open
                            ? 'absolute inset-0 top-full flex h-screen flex-col items-start gap-8 bg-white px-8 pt-12'
                            : 'hidden font-bold md:gap-12')
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
                                    onClick={open ? setIsOpen : ''}
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
                <button className="block md:hidden" onClick={setIsOpen}>
                    <Icon
                        className={'h-8 w-8'}
                        iconName={!open ? 'bars' : 'x'}
                    />
                </button>
            </nav>
        </header>
    );
};
