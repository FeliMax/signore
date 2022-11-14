import React, { FC } from 'react';
import { Link } from 'react-scroll';

interface Props {
    to: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const SmoothScrollLink: FC<Props> = ({
    to,
    className,
    children,
    onClick,
}: Props) => {
    return (
        <Link
            to={to}
            className={className}
            smooth={true}
            duration={700}
            spy={true}
            activeClass="text-secondary"
            offset={-40}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default SmoothScrollLink;
