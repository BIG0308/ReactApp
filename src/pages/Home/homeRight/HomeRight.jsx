/*
* 作者：樊进德
* 日期：2020/06/07
* 内容：网站右侧部分
* */
import React, {useContext} from 'react';
import LayoutCtx from "../ctx";
import {Carousel} from "antd";
import MyTab from '../components/myTab/MyTab';
import {LazyLoadImage } from 'react-lazy-load-image-component';
import big from '../../../assets/imgs/u=1929258056,89057878&fm=26&gp=0.jpg';
import small from '../../../assets/imgs/u=2703127601,1207626774&fm=26&gp=0.jpg';
import 'react-lazy-load-image-component/src/effects/blur.css';
function HomeRight() {
    const Layout = useContext(LayoutCtx);// 注入context
    //暂时没啥用
    function imgLoaded() {
        // console.log('展示图片加载完');
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
            <div className="tabZone">
                <MyTab/>
            </div>
            <div className={'another-show'} style={{height: 2000}}>
                <div style={{height:1000}}/>
                {/*<LazyLoad height={200}>*/}
                {/*    <img width={100} height={100} src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1499068140,2344550454&fm=26&gp=0.jpg" alt=""/>*/}
                {/*</LazyLoad>*/}
                {/*<LazyLoad  height={200}>*/}
                {/*    <img  src="https://user-images.githubusercontent.com/3616980/44358570-afc8ac00-a4b5-11e8-8f7e-1ad9b7038ce5.png" alt=""/>*/}
                {/*</LazyLoad>*/}
                {/*<LazyLoad  height={200}>*/}
                {/*    <img width={100} height={100} src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3702127153,902997724&fm=26&gp=0.jpg" alt=""/>*/}
                {/*</LazyLoad>*/}
                {/*<LazyLoad  width={100} height={100} height={200}>*/}
                {/*    <img src="http://static.nodejs.cn/_static/img/biz/api_nav_kkb.png" alt=""/>*/}
                {/*</LazyLoad>*/}
                <LazyLoadImage
                    alt={'占位图'}
                    height={200}
                    width={200}
                    src={'https://user-images.githubusercontent.com/3616980/44358570-afc8ac00-a4b5-11e8-8f7e-1ad9b7038ce5.png'}
                />
                <LazyLoadImage
                    alt={'占位图'}
                    height={200}
                    width={200}
                    src={'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1499068140,2344550454&fm=26&gp=0.jpg'}

                />
                <LazyLoadImage
                    alt={'占位图'}
                    height={200}
                    width={200}
                    src={'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1499068140,2344550454&fm=26&gp=0.jpg'}
                />
            </div>
        </div>
    );
}

export default HomeRight;

