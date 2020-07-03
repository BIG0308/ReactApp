import React, {useContext} from 'react';
import './css/homeLeft.less'
import LayoutCtx from "./ctx";

function HomeLeft(props) {
    let Layout = useContext(LayoutCtx);
    let classNames = 'homeLeft';
    if(Layout === false){
        classNames+=' homeLeftCollapse'
    }
    return (
        <div className={classNames}>
            <div className={'btn'} onClick={props.handleCollapse}/>
            <div className={'login'}>

            </div>,
            {
                Layout && (
                    <div className={'some'}>

                    </div>
                )
            }
        </div>
    );
}

export default HomeLeft;

