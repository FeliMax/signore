import React from 'react';

export type Direction = 'top' | 'bottom';

interface TooltipProps {
    tooltipName: string;
}

export const Tooltip = ({ tooltipName }: TooltipProps) => {
    return (
        <div className="pointer-events-none absolute  left-1/2 top-[calc(100%+.5rem)] z-20 hidden w-28 -translate-x-1/2 rounded-lg bg-gray-700 p-2 text-center text-[.7rem] text-sm text-white opacity-0 duration-300 group-hover:opacity-100 xl:block">
            {tooltipName}
        </div>
    );
};
