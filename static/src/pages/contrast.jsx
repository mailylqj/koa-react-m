import React, { useEffect } from 'react';
import { Select } from 'antd';

import useSelect from '../hooks/useSelect';
const { Option } = Select;
const Contrast = () => {
    const props = useSelect()
    const options = Array(10).fill().map((item, index) => <Option key={index} value={index}>测试{index}</Option>)
    return(
        <div>
            <Select {...props} style={{width:'100%'}}>
                {options}
            </Select>
        </div>
    )
}

export default Contrast;