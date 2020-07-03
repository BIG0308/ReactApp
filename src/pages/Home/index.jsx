import React,{useState,useContext} from "react";
import './css/index.less';
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import LayoutCtx from "./ctx";

function Home() {
    const [isCollapse,setCollapse] = useState(false);
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

