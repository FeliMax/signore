import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IconProps {
    iconName: string;
    className?: string;
    url?: string;
}

export const Icon = ({ iconName, className, url }: IconProps) => {
    return (
        <a
            className={url === undefined ? 'pointer-events-none' : ''}
            href={url}
            target={url === undefined ? '' : '_blank'}
            rel="noreferrer"
        >
            <FontAwesomeIcon
                className={className}
                icon={iconName as IconProp}
            />
        </a>
    );
};
