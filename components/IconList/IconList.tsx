import {Icon, iconProps} from '../Icon/Icon';

interface iconListProps {
    icons: Array<iconProps>;
    className: string;
    iconClassName?: string;
}

export const IconList = ({icons, className, iconClassName}: iconListProps) => {
    return (
        <div className={'flex ' + className}>
            {icons?.map(icon =>
                <Icon iconName={icon.iconName} url={icon.url} className={iconClassName} key={icon.url}/>
            )}
        </div>
    )
}