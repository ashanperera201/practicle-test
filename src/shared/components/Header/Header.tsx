import React from 'react';

import './header.scss'


const Header = (): JSX.Element => {
    return (
        <>
            <div className='text-wrap flex flex-col items-center'>
                <div className='flex flex-row gap-3'>
                    <h1 className='text-6xl font-bold'>LOREM</h1>
                    <h1 className='text-6xl font-bold underline underline-offset-1'>IPSUM</h1>
                    <h1 className='text-6xl font-bold'>DOLOR</h1>
                </div>

                <div className='my-8'>
                    <h4 className='text-center font-semibold text-3xl'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                    </h4>
                    <h4 className='text-center font-semibold text-3xl'>
                        Quisque volutpat mattis eros.
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Header;