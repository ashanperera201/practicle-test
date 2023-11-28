import React from 'react';

interface ISectionButtonProp {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const SectionButton = (props: ISectionButtonProp): JSX.Element => {

    const { onClick } = props;

    return (
        <>
            <div className='absolute bottom-0'>
                <button className="hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline animate-bounce" onClick={onClick}>
                    <svg width="40" height="30" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                        <path d="M0,0 l35,50 l35,-50" fill="none" stroke="#2563eb" stroke-linecap="round" stroke-width="8" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default SectionButton;