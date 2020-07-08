import React from "react";
import {Tabs} from 'antd';
import './selfTab.less';
const {TabPane} = Tabs;

function renderTabBar(props, DefaultTabBar){
    const {panes,activeKey} = props;
    let className='self-ant-tabs-tab';
    return (
        <div className={'ant-tabs ant-tabs-left'}>
            <div className={'ant-tabs-nav'}>
                {
                    panes.map(item => {
                        return (
                            <div
                                key={item.key}
                                className={activeKey === item.key?className+' self-ant-tabs-tab-active':className}
                                onClick={()=>props.onTabClick(item.key)}
                            >
                                {item.props.tab}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

function MyTab(props) {
    // 监听tab改变的动作
    function tabChange(key) {
        console.log(key)
    }

    return (
        <div>
            <Tabs onChange={tabChange}
                  tabPosition='left'
                  style={{height: 300}}
                  renderTabBar={renderTabBar}
                  tabBarExtraContent={<h3>额外</h3>}
            >
                <TabPane tab="tab1" key="1">
                    <Tabs tabPosition='top'>
                        <TabPane tab='11' key={'11'}>
                            11...
                        </TabPane>
                        <TabPane tab='12' key={'12'}>
                            12...
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane tab="tab2" key="2">
                    <Tabs tabPosition='top'>
                        <TabPane tab='21' key={'21'}>
                            21...
                        </TabPane>
                        <TabPane tab='22' key={'22'}>
                            22...
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane tab="tab3" key="3">
                    哈哈3
                </TabPane>
                <TabPane tab="tab1" key="4">
                    哈哈4
                </TabPane>
                <TabPane tab="tab2" key="5">
                    哈哈5
                </TabPane>
                <TabPane tab="tab3" key="6">
                    哈哈6
                </TabPane>
                <TabPane tab="tab1" key="7">
                    哈哈7
                </TabPane>
                <TabPane tab="tab2" key="8">
                    哈哈8
                </TabPane>
                <TabPane tab="tab3" key="9">
                    哈哈9
                </TabPane>
                <TabPane tab="tab3" key="10">
                    哈哈9
                </TabPane>
                <TabPane tab="tab3" key="11">
                    哈哈9
                </TabPane>
            </Tabs>
        </div>
    )
}

export default MyTab;

