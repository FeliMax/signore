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
        <header className="fixed w-full h-fit px-2 py-6 my-auto shadow-md">
            <nav className=" container flex justify-between items-center gap-12 text-gray-500">
                <div className="">{headerData.logo}</div>
                <ul className="flex items-center gap-12 font-bold">
                    {headerData.navbarItems.map(item => {
                        return (
                            <li className="cursor-pointer" key={item.text}>{item.text ? item.text :
                                <Icon iconName={item.icon} className="w-8 h-8"/>}</li>
                        )
                    })}
                </ul>
                <div className="hidden">
                <Icon className="w-8 h-8 " iconName="bars"/>
                </div>
            </nav>
        </header>
    )
}