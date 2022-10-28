import React from 'react';
import {IconProp, library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas, fab);

interface Props {
    iconName: IconProp;
    className?: string;
}

export const Icon = ({iconName, className}: Props) => <FontAwesomeIcon className={className} icon={iconName} />;