import React from 'react';

import './header.scss'


const Header = (): JSX.Element => {
    return (
        <>
            <div className='text-wrap flex flex-col items-center'>
                <div className='flex flex-row gap-3'>
                    <h1 className='lg:text-6xl text-2xl font-bold'>LOREM</h1>
                    <h1 className='lg:text-6xl text-2xl font-bold underline underline-offset-1'>IPSUM</h1>
                    <h1 className='lg:text-6xl text-2xl font-bold'>DOLOR</h1>
                </div>

                <div className='lg:my-8'>
                    <h4 className='text-center font-semibold lg:text-3xl text-lg'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                    </h4>
                    <h4 className='text-center font-semibold lg:text-3xl text-lg'>
                        Quisque volutpat mattis eros.
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Header;