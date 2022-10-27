import {Icon} from '../Icon/Icon';


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
        <header className="fixed w-full h-fit px-2 py-6 bg-[#201F20] my-auto ">
            <nav className=" container flex justify-between items-center gap-12 text-white">
                <div className="">{headerData.logo}</div>
                <ul className="flex items-center gap-12 font-bold">
                    {headerData.navbarItems.map(item => {
                        return (
                           <li className="cursor-pointer" key={item.text}>{item.text ? item.text : <Icon iconName={item.icon} className="w-8 h-8"/> }</li>
                        )
                    })}
                </ul>
                    <Icon className="w-8 h-8 md:hidden" iconName="bars"/>
            </nav>
        </header>
    )
}