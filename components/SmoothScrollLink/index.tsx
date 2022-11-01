import { FC } from "react";
import { Link } from "react-scroll";

interface Props {
    to: string;
    className?: string;
    children?: React.ReactNode;
}

const SmoothScrollLink: FC<Props> = ({ to, className, children }: Props) => {
    return (
        <Link to={to} className={className} smooth={true} duration="700">
            {children}
        </Link>
    )
};

export default SmoothScrollLink;