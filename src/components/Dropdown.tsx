import React, { FC, useState } from 'react';
import { Popover } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';

interface IDropdown{
    className: string;
}

export const Dropdown:FC<IDropdown> = ({ className }) => {

    const [select, setSelect] = useState<number>(10);

    return(
        <Popover className={`relative ${className}`}>
            <Popover.Button className="text-white px-2 rounded-md text-left py-2 w-24 bg-black">
                <div className='flex items-center text-sm'>
                    <span>{ select }</span>
                    <BsChevronDown className='ml-auto text-sm' />
                </div>
            </Popover.Button>

            <Popover.Panel className="absolute z-10 text-white top-9 px-2 w-24 bg-black">
                <div className="flex flex-col max-h-24 overflow-y-auto text-sm">
                    { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => (
                        <span onClick={() => setSelect(num)} key={i} className="py-1 cursor-pointer">{num}</span>
                    )) }
                </div>
            </Popover.Panel>
        </Popover>
    );
};