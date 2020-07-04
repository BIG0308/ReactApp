import React, {useContext} from 'react';
import './css/homeRight.less';
import LayoutCtx from "./ctx";
import {Carousel} from "antd";
import big from '../../assets/imgs/u=1929258056,89057878&fm=26&gp=0.jpg';
import small from '../../assets/imgs/u=2703127601,1207626774&fm=26&gp=0.jpg';
function HomeRight() {

    const Layout = useContext(LayoutCtx);
    function imgLoaded() {
        console.log('展示图片加载完');
    }
    return (
        <div className={'homeRight'}>
            <div className={'rightShow'}>
                <div className="banner">
                    <Carousel dotPosition={"bottom"} autoplay>
                        <div className={'item'}>1</div>
                        <div className={'item'}>2</div>
                        <div className={'item'}>3</div>
                        <div className={'item'}>4</div>
                    </Carousel>
                </div>
                <div className="image">
                    <img src={Layout?big:small} alt="展示图片" onLoad={imgLoaded}/>
                </div>
            </div>
            <div className={'another-show'} style={{height: 2000}}/>
        </div>
    );
}

export default HomeRight;

