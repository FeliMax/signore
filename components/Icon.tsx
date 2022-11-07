import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Direction, Tooltip } from './Tooltip';

export interface IconProps {
    iconName: string;
    className?: string;
    url?: string;
    tooltip?: string;
}

export const Icon = ({ iconName, className, url, tooltip }: IconProps) => {
    return (
        <a
            className={
                'group relative ' +
                (url === undefined ? 'pointer-events-none' : '')
            }
            href={url}
            target={url === undefined ? '' : '_blank'}
            rel="noreferrer"
        >
            {tooltip != null ? <Tooltip tooltipName={tooltip} /> : ''}

            <FontAwesomeIcon
                className={className}
                icon={iconName as IconProp}
            />
        </a>
    );
};
