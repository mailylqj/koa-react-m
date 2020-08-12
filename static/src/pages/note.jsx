import React, { useRef } from 'react';
import { Select } from 'antd';
import { set } from 'lodash';

const { Option } = Select;


class Contrast extends React.Component{
    onChangeHandle(){}
    onSearchHandle(){}
    render(){
        const options = Array(10).fill().map((item, index) => (
            <Option key={index} value={index}>测试{index}</Option>
        ))
        return (
            <ExtendSelect server={server}>
                {({data, onSearchHandle}) => {
                    const options = data.map((item, index) => (
                        <Option key={index} value={index}>测试{index}</Option>
                    ))
                    return (
                        <Select 
                          value={this.state.value}
                          onChange={this.onChangeHandle}
                          onSearch={onSearchHandle}
                        >
                            {options}
                        </Select>
                    )
                }}
            </ExtendSelect>
        )
    }
}


class ExtendSelect extends React.Component{
    constructor(props){
        this.state = { data: [] };
    }
    onSearchHandle = (value) => {
        const { server } = this.props
        server(value).then(data => this.data = data)
    }
    render(){
        return this.props.children({
            data: this.data,
            onSearchHandle: this.onSearchHandle
        })
    }
}

const ExtendSelect = server => WrappendComponent => {
    return class extends React.Component{
        constructor(props){
            this.data = [];
        }
        onSearchHandle = (value) => {
            server(value).then(data => this.data = data)
        }
        render(){
            const newProps = {
                ...this.props,
                data: this.data,
                onSearchHandle: this.onSearchHandle
            }
            return <WrappendComponent {...newProps}/>
        }
    }
}


const Contrast = () => {
    const { data, onSearchHandle } = useSelect(server);
    const options = data.map((item, index) => (
        <Option key={index} value={index}>测试{index}</Option>
    ))
    return(
        <div>
            <Select onSearch={onSearchHandle}>
                {options}
            </Select>
        </div>
    )
}

export default Contrast;


import React, { useState, useRef } from 'react';

function Example() {
    // 声明一个叫 "count" 的 state 变量
    const [count, setCount] = useState(0);
    const ref = useRef(0);
    const increment = () => {
        setTimeout(() => {
            setCount(ref.current + 1)
        }, 1000);
    }

    const handleScroll = () =>{
        //
    }
    
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);
      
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    },[]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>Click me</button>
        </div>
    );
}

export default Example;



var _state; // 把 state 存储在外面

function useState(initialValue) {
    _state = _state || initialValue; 
    // 如果没有 _state，说明是第一次执行，把 initialValue 复制给它
    function setState(newState) {
        _state = newState;
        render();
    }
    return [_state, setState];
}


let _deps; // _deps 记录 useEffect 上一次的 依赖

function useEffect(callback, depArray) {
    const hasNoDeps = !depArray; // 如果 dependencies 不存在
    const hasChangedDeps = _deps
    ? !depArray.every((el, i) => el === _deps[i]) // 两次的 dependencies 是否完全相等
    : true;
    /* 如果 dependencies 不存在，或者 dependencies 有变化*/
    if (hasNoDeps || hasChangedDeps) {
        callback();
        _deps = depArray;
    }
}


let memoizedState = []; // hooks 存放在这个数组
let cursor = 0; // 当前 memoizedState 下标

function useState(initialValue) {
    memoizedState[cursor] = memoizedState[cursor] || initialValue;
    const currentCursor = cursor;
    function setState(newState) {
        memoizedState[currentCursor] = newState;
        render();
    }
    return [memoizedState[cursor++], setState]; // 返回当前 state，并把 cursor 加 1
}


function useEffect(callback, depArray) {
    const hasNoDeps = !depArray;
    const deps = memoizedState[cursor];
    const hasChangedDeps = deps
        ? !depArray.every((el, i) => el === deps[i])
        : true;
    if (hasNoDeps || hasChangedDeps) {
        callback();
        memoizedState[cursor] = depArray;
    }
    cursor++;
}


import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
    const counter = useSelector(state => state.counter)
    return <div>{counter}</div>
}


import React from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <span>{value}</span>
            <button onClick={() => dispatch({ type: 'increment-counter' })}>
                Increment counter
            </button>
        </div>
    )
}