import {Icon} from '../Icon/Icon';
import Logo from '/assets/logo.svg'
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


interface NavbarItem {
    text: string;
    icon: string;
    url: string;
}

interface Data {
    headerData: {
        logo: string;
        navbarItems: Array<NavbarItem>
    };
}

export const Header = ({headerData}: Data) => {
    return (
        <header className="fixed w-full h-fit px-2 py-4 my-auto shadow-md">
            <nav className=" container flex justify-between items-center gap-12 text-gray-500">
                <div className="">
                    <Image src={Logo} width={100} height={50}/>
                </div>
                <ul className="flex items-center gap-12 font-bold">
                    {headerData.navbarItems.map(item => {
                        return (
                            <li className="group flex items-center gap-2 text-xl hover:text-secondary cursor-pointer duration-100" key={item.text}>
                                <Icon className="w-6 h-6 group-hover:rotate-[360deg] duration-700" iconName={item.icon as IconProp}/>
                                {item.text}
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