/*
* 作者：樊进德
* 日期：2020/07/06
* 内容：主页布局，提供了全局Layout变量，控制整体布局策略
* */
import React,{useState} from "react";
import HomeLeft from "./homeLeft/HomeLeft";
import HomeRight from "./homeRight/HomeRight.jsx";
import LayoutCtx from "./ctx";
import './home.less';

function Home() {
    /*
    * isCollapse:Boolean
    * 左侧是否是合拢状态
    * */
    const [isCollapse,setCollapse] = useState(false);
    // 改变开光状态
    function handleCollapse() {
        setCollapse(!isCollapse);
    }
    return (
        <div className='home'>
            <LayoutCtx.Provider value={isCollapse}>
                <HomeLeft handleCollapse={handleCollapse}/>
                <HomeRight/>
            </LayoutCtx.Provider>
        </div>
    )
}

export default Home;

