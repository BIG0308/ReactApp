import React from 'react';
import {Tabs} from 'antd';

const {TabPane} = Tabs;

function MyTabLeft(props) {
    return (
        <Tabs mode={'top'}>
            <TabPane tab={'ll'} key={'ll'}>
               ll
            </TabPane>
        </Tabs>
    )
}

export default MyTabLeft;

