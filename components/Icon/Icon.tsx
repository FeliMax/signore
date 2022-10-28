import React from 'react';
import {IconProp, library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {fab} from '@fortawesome/free-brands-svg-icons';
// import {faCheckSquare, faCoffee, faCheck, faSpinner, faBars} from '@fortawesome/free-solid-svg-icons'
// library.add(faCheckSquare, faCoffee, faCheck, fab, faSpinner, faBars)


interface Props {
    iconName: IconProp | string;
    className?: string;
}

export const Icon = ({iconName, className}: Props) => {
    return (


        <div>
            {/*// @ts-ignore*/}
            <FontAwesomeIcon className={className} icon={iconName}/>
            {/*// @ts-ignore*/}
            <FontAwesomeIcon className={className} icon={['fab', `${iconName}`]}/>

        </div>

    )

}