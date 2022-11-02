import {Icon} from '../Icon/Icon';
import Logo from '/assets/logo.svg'
import Image from 'next/image';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import content from '../../public/content/header.json';
import {useState} from 'react';

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

    const setIsOpen = ():void => {
         setOpen(prevState => !prevState)
    }

    return (
        <header className="fixed w-full h-fit px-2 py-4 bg-white shadow-md z-20">
            <nav className=" container flex justify-between items-center gap-12 text-gray-500">
                <div className="">
                    <Image src={Logo} width={100} height={50} alt="logo"/>
                </div>
                <ul className={'md:flex md:flex-row font-bold ' + (open ? 'absolute top-full flex flex-col gap-8 items-start px-8 pt-12 bg-white inset-0 h-screen pointer-events-none' : 'hidden md:gap-12 font-bold')}>
                    {headerContent.items.map(item => {
                        return (
                            <li className="group flex items-center gap-2 text-xl hover:text-secondary cursor-pointer duration-100"
                                key={item.text}>
                                <Icon className="w-6 h-6 group-hover:rotate-[360deg] duration-700"
                                      iconName={item.icon as IconProp}/>
                                {item.text}
                            </li>
                        )
                    })}
                </ul>
                <button  className="block md:hidden" onClick={setIsOpen}>
                    <Icon className={'w-8 h-8'} iconName={!open ? 'bars' : 'x'}/>
                </button>
            </nav>
        </header>
    )
}