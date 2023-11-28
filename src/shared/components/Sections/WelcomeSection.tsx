import React from 'react';
import Video from '../Video/Video';
import Logo from '../Logo/Logo';
import Header from '../Header/Header';
import SectionButton from '../SectionButton/SectionButton';

interface IWelcomeSection {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const WelcomeSection = (props: IWelcomeSection): JSX.Element => {


    return (
        <>
            <Video />
            <Logo />
            <Header />
            <SectionButton onClick={props.onClick} />
        </>
    )
}

export default WelcomeSection;