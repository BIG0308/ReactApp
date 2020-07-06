/*没啥用*/
import React, {forwardRef} from 'react';
import './autoNav.less';

function AutoNav(props,ref) {
    return (
        <div className={'auto-nav'} ref={ref}>

        </div>
    );

}

export default forwardRef(AutoNav);

