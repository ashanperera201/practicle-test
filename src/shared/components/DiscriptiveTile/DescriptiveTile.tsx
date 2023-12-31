import React from 'react';

import './commonDescriptiveTile.scss'

interface IDescriptiveTile {
    title: string;
    description: string;
}

const DescriptiveTile = (props: IDescriptiveTile): JSX.Element => {

    const { title, description } = props;

    return (
        <>
            <div className='container-wrap w-64 max-sm:w-60 p-4 h-80 flex flex-col '>
                <h3 className='font-bold'>{title}</h3>
                <h5 className='font-normal text-2xl'>
                    {description}
                </h5>
            </div>
        </>
    )
}


export default DescriptiveTile;