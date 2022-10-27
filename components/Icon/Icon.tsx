import {IconProp, library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fab, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faCheckSquare, faCoffee, faCheck, faSpinner, faBars} from '@fortawesome/free-solid-svg-icons'
import React from 'react';

library.add(faCheckSquare, faCoffee,faCheck, fab, faSpinner, faBars,faGithub, faLinkedin)


interface Props {
    iconName: IconProp | string;
    className?: string;
}

export const Icon = ({iconName, className}: Props ) => {
    return (
    // @ts-ignore
        <FontAwesomeIcon className={className} icon={`${iconName}`}/>
    )

}