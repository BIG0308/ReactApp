/*
* 滚动懒加载
* 提供占位图片
* props 接收占位图：placeholder:String  &&  目标图片:aim:String
* 作为容器包裹在具有高度的视图中
* */

import React, {Component,createRef} from 'react';

const LazyLoadImg = (BaseComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                doms:[],
                canRender:false, // 判断位置是否渲染
                hasRender:false  // 是否已经渲染过
            };
            this.component = createRef();
        };
        componentDidMount() {

        };
        render() {
            const {placeholder,aim} = this.props;
            const {canRender} = this.state;
            return (
                <div>
                    哈哈
                </div>
            )
        }
    }
};

export default LazyLoadImg;

