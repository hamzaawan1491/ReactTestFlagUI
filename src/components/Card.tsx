import React, { FC, useState } from 'react';
import { Heading } from './Heading';
import { Toggle } from './Toggle';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { Dropdown } from './Dropdown';
import { IListItem } from '../shared/interface';

interface ICard{
    title: string;
    showDropdown?: boolean;
    className: string;
    showMenu: boolean;
    subLists?: { id: number; title: string; dropdown?: boolean; }[];
}

export const Card:FC<ICard> = ({ title, className, showMenu, subLists, showDropdown }) => {

    const [toggle, setToggle] = useState<boolean>(false);
    const [menu, setMenu] = useState<boolean>(false);

    const openMenu = () => {
        setMenu(!menu);
        setToggle(!toggle);
    }

    return(
        <div className="w-full">
            <div className={`flex flex-row rounded-md items-center justify-start ${className}`}>
                <div className="rounded-sm bg-card-box h-11 w-10 mr-2"></div>
                
                <Heading title={title} className="" />
                
                { showDropdown && <Dropdown className="mr-4 ml-auto" /> }

                <Toggle className={showDropdown ? '' : 'ml-auto'} flag={toggle} onChecked={() => openMenu()} />
                
                { title?.toLowerCase() === 'users' && (
                    menu ? <BsChevronUp className="text-lg text-white cursor-pointer ml-5" onClick={openMenu} /> :
                    <BsChevronDown className="text-lg text-white cursor-pointer ml-5" onClick={openMenu} />
                ) }

            </div>
            
            { toggle && menu && showMenu && <div className='flex flex-col items-start pl-5 pr-10 py-2 mt-2'>
                { subLists?.map((item: IListItem, i) => (
                    <Card 
                        title={item?.title} key={item?.id} showMenu={false}
                        className="py-2 px-4 bg-secondary" showDropdown={item?.dropdown}
                    />
                )) }
            </div> }

        </div>
    );
};