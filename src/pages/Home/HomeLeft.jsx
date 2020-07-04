import React, {useContext,useRef} from 'react';
import './css/homeLeft.less'
import LayoutCtx from "./ctx";

function HomeLeft(props) {
    let Layout = useContext(LayoutCtx);
    let classNames = 'homeLeft';
    const leftWrap = useRef();
    if(Layout === false){
        classNames+=' homeLeftCollapse'
    }
    function handleWheel(e) {
        let {current} = leftWrap;
        console.log(current.scrollTop)
    }
    return (
        <div className={classNames} onWheel={handleWheel} ref={leftWrap}>
            <div className={'btn'} onClick={props.handleCollapse}/>
            <div className={'login'}>

            </div>,
            {
                Layout && (
                    <div className={'some'}>

                    </div>
                )
            },
            <div style={{height:1000}}/>
        </div>
    );
}

export default HomeLeft;

