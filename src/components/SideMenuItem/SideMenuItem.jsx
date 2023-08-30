import React from 'react';
import './SideMenuItem.css';
import {ReactComponent as ArrowIcon} from 'svg/menu-arrow-right.svg';

const SideMenuItem = ({SvgIcon, displayName, smallItem = false, smallIcon = false}) => {

    return (
        <div className={'side-menu-item' + (smallItem ? ' small-item' : '')}>
            <SvgIcon className={'side-menu-item-icon' + (smallIcon ? ' small-icon' : '')}/>
            <div className='side-menu-item-label'>
                {displayName}
            </div>
            <div className='side-menu-item-arrow'>
                <ArrowIcon/>
            </div>
        </div>
    );
};

export default SideMenuItem;