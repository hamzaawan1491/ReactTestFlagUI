import React, { FC } from 'react';
import { Switch } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';
import { BiCheck } from 'react-icons/bi';

interface IToggle {
	flag: boolean;
	onChecked: () => void;
	className: string;
}

export const Toggle:FC<IToggle> = (props) => {

	const { flag, onChecked, className } = props;

	const classNames = (...classes: any): string => {
		return classes.filter(Boolean).join(' ');
	};

	return(

		<Switch
			checked={flag}
			onChange={onChecked}
			className={classNames(
				flag ? 'bg-toggle' : 'bg-gray-200',
				`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200
				focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`
			)}
		>
			<span
				className={classNames(
					flag ? 'translate-x-5' : 'translate-x-0',
					'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
				)}
			>
				<span
					className={classNames(
						flag ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
						'inset-0 h-full w-full flex items-center justify-center transition-opacity'
					)}
					aria-hidden="true"
				>
                    <FaTimes style={{ fontSize: '8px' }} className="text-cc-gray-50" />
				</span>
				<span
					className={classNames(
						flag ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
						'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
					)}
					aria-hidden="true"
				>
                    <BiCheck style={{ fontSize: '12px' }} className="text-blue-500" />
				</span>
			</span>
		</Switch>

	);

};