import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                `group relative ` +
                (url === undefined ? 'pointer-events-none' : '')
                // ' ' +
                // (url != null
                //     ? 'after:absolute after:top-8 after:left-1/2 after:z-20 after:flex after:-translate-x-1/2 after:rounded-lg after:bg-gray-700 after:px-4 after:py-2 after:text-sm after:text-white after:opacity-0 after:duration-300 after:content-["githubandGitlab"] after:hover:opacity-100'
                //     : '')
            }
            href={url}
            target={url === undefined ? '' : '_blank'}
            rel="noreferrer"
        >
            {tooltip != null ? (
                <div className="pointer-events-none absolute top-[calc(100%+.5rem)] left-1/2 z-20 hidden w-28 -translate-x-1/2 rounded-lg bg-gray-700 p-2 text-center text-[.7rem] text-sm text-white opacity-0 duration-300 group-hover:opacity-100 xl:block">
                    {tooltip}
                </div>
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
