import { Icon, IconProps } from './Icon';

export interface IconListProps {
    icons: IconProps[];
    className: string;
    iconClassName?: string;
}

export const IconList = ({
    icons,
    className,
    iconClassName,
}: IconListProps) => {
    return (
        <div className={'flex ' + className}>
            {icons?.map((icon, index: number) => (
                <Icon
                    key={index}
                    iconName={icon.iconName}
                    url={icon.url}
                    className={iconClassName}
                    tooltip={icon.tooltip}
                    tooltipDirection={icon.tooltipDirection}
                />
            ))}
        </div>
    );
};
