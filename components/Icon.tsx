import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Direction, Tooltip } from './Tooltip';

export interface IconProps {
    iconName: string;
    className?: string;
    url?: string;
    tooltip?: string;
    tooltipDirection: Direction;
}

export const Icon = ({
    iconName,
    className,
    url,
    tooltip,
    tooltipDirection,
}: IconProps) => {
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
            {tooltip != null ? (
                <Tooltip
                    tooltipName={tooltip}
                    classname=""
                    tooltipDirection={tooltipDirection}
                />
            ) : (
                ''
            )}

            <FontAwesomeIcon
                className={className}
                icon={iconName as IconProp}
            />
        </a>
    );
};
