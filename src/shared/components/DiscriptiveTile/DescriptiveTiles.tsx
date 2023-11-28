import React from 'react';

import './commonDescriptiveTile.scss';
import DescriptiveTile from './DescriptiveTile'
import { ITile } from '../../interfaces/tile.interface';

interface IDescriptiveTileList {
    tiles: ITile[];
}

const DescriptiveTileList = (props: IDescriptiveTileList): JSX.Element => {

    const { tiles } = props;

    return (
        <>
            <div className='absolute w-2/5 h-2/5'>
                <h3 className='font-bold text-3xl text-end'>DONEC NEC JUSTO</h3>
                <div className='flex flex-row overflow-x-scroll'>
                    {
                        tiles.map((e, i) => (
                            <div className='p-5' key={i}>
                                <DescriptiveTile title={e.title} description={e.description} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


export default DescriptiveTileList;