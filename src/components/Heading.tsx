import React, { FC } from 'react';

interface IHeading{
    title: string;
    className: string;
}

export const Heading:FC<IHeading> = ({ title, className }) => {
    return(
        <h6 className={`text-base uppercase text-white block ${className}`}> { title } </h6>
    );
};