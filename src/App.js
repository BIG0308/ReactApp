import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import AutoNav from "./components/AutoNav/AutoNav";
import Home from "./pages/Home";
import {Switch, Route} from 'react-router-dom';

function App() {
    // 把导航栏的状态提升到app
    const [navIsFixed,setNavFixed] = useState(false);
    const nav = useRef();
    useEffect(()=>{
        window.onscroll=handleScroll;
        return function clearEvent() {
            window.onscroll=null;
        }
    });
    function handleScroll(){
        // 获取滚动条距离顶部的巨鹿
        let topDistance = document.documentElement.scrollTop
        if(topDistance>=100 && navIsFixed === false){
            nav.current.classList.add('fixed');
            setNavFixed(true);
        }else if(topDistance<100 && navIsFixed === true){
            nav.current.classList.remove('fixed');
            setNavFixed(false);
        }
    }
    return (
        <div className="App">
            <AutoNav ref={nav} isFixed={navIsFixed}/>
            <Switch>
                <Route exact path={'/'}>
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
