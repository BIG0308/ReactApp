/*
* 开发者：樊进德
* 日期：  2020/06/07
* 内容：  左侧布局
* */
import React, {useContext,useRef} from 'react';
import LayoutCtx from "../ctx";

function HomeLeft(props) {
    let Layout = useContext(LayoutCtx);// 函数组件独有hook函数，提供全局的Layout

    // 根据Layout值改变左侧div的类名
    let classNames = 'homeLeft';
    const leftWrap = useRef();
    if(Layout === false){
        classNames+=' homeLeftCollapse'
    }

    // 暂时没啥用
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

