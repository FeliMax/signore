import { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

interface Props {
    wordList: string[];
}

export const Revolver: FC<Props> = ({ wordList }: Props) => {
    const [index, setIndex] = useState<number>(0);
    const ref = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // show next item in list. if end is reached -> start from beginning
            setIndex(current => (current + 1) % wordList.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <SwitchTransition>
            <CSSTransition
                nodeRef={ref}
                classNames="right-to-left"
                timeout={{ enter: 300, exit: 300 }}
                key={wordList[index]}
            >
                <h4 ref={ref}>{wordList[index]}</h4>
            </CSSTransition>
        </SwitchTransition>
    );
};
