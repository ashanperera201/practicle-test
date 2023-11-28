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
            <div className='flex flex-row justify-between absolute top-0 w-full p-6'>
                <div className='logo-container border font-semibold border-black flex flex-row justify-center items-center uppercase'>
                    Logo
                </div>

                <>
                    {
                        showRightHeader && (
                            <>
                                <h3 className='uppercase'>Discover Mode</h3>
                            </>
                        )
                    }
                </>
            </div>
        </>
    )
}

export default Logo;
