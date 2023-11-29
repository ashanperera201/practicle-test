import React from 'react';

import './logo.scss';


interface ILogoProps {
    showRightHeader?: boolean;
    rightHeader?: string;
}

const Logo = (props: ILogoProps): JSX.Element => {

    const { rightHeader, showRightHeader } = props;

    return (
        <>
            <div className='flex flex-row max-sm:flex-col max-sm:justify-center justify-between absolute top-0 w-full items-center p-6'>
                <div className='h-14 w-36 border font-semibold border-black flex flex-row justify-center items-center uppercase'>
                    Logo
                </div>

                <>
                    {
                        showRightHeader && (
                            <>
                                <h3 className='uppercase max-sm:mt-3'>Discover Mode</h3>
                            </>
                        )
                    }
                </>
            </div>
        </>
    )
}

export default Logo;
