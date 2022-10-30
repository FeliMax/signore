import React from 'react';
import {IconProp, library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

library.add(fas, fab);

export interface iconProps {
    iconName: IconProp | string;
    className?: string;
    url?: string;
}

export const Icon = ({iconName, className, url}: iconProps) => {
    return (
        <a className={!url ? 'pointer-events-none' : 'hover:opacity-75'} href={`https://${url}/`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={className} icon={iconName}/>
        </a>
    )
}
