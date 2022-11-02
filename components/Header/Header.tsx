import {Icon} from '../Icon/Icon';
import Logo from '/assets/logo.svg'
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import content from '../../public/content/header.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SmoothScrollLink from '../SmoothScrollLink';

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

    return (
        <header className="fixed w-full h-fit px-2 py-4 bg-white shadow-md z-20">
            <nav className=" container flex justify-between items-center gap-12 text-gray-500">
                <SmoothScrollLink to="/" className="hover:cursor-pointer">
                    <Image src={Logo} width={100} height={50} alt="logo" />
                </SmoothScrollLink>
                <ul className="flex items-center gap-12 font-bold">
                    {headerContent.items.map(item => {
                        return (
                            <li className="group flex items-center gap-2 text-xl hover:text-secondary cursor-pointer duration-100" key={item.text}>
                                <SmoothScrollLink to={item.url ?? ""} className="flex space-x-2">
                                    <FontAwesomeIcon className="w-6 h-6 group-hover:rotate-[360deg] duration-700" icon={item.icon as IconProp}/>
                                    <span>{item.text}</span>
                                </SmoothScrollLink>
                            </li>
                        )
                    })}
                </ul>
                <div className="block md:hidden">
                    <Icon className="w-8 h-8 " iconName="bars"/>
                </div>
            </nav>
        </header>
    )
}