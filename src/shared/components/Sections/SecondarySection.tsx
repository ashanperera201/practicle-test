import React from 'react'
import Logo from '../Logo/Logo'
import DescriptiveTileList from '../DiscriptiveTile/DescriptiveTiles'
import { ITile } from '../../interfaces/tile.interface';

interface ISecondarySection {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    descriptiveList?: ITile[];
}

const SecondarySection = (props: ISecondarySection): JSX.Element => {

    const { descriptiveList } = props;

    return (
        <>
            <img className='section-img' src='https://wallpapercave.com/wp/sPXLBtC.jpg' alt='img' />
            <Logo showRightHeader rightHeader='Discover Mode' />
            <DescriptiveTileList tiles={descriptiveList ?? []}/>
        </>
    )
}

export default SecondarySection;