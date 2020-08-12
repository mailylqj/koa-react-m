import React from 'react';

const {useState, useCallback, useEffect, useMemo} = React;
const HooksDemo = () => {
    const [show, setShow] = useState(false);

    const listener = useCallback(() => {
        if(document.documentElement.scrollTop > 200){
            console.log('scroll')
            setShow(true);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', listener)
    },[])

    const handleClose = () => {
        setShow(false);
        document.removeEventListener('scroll', listener)
    }
    console.log('re-render', show);

    const [count, setCount] = useState(0);
    
    const increment = () => {
        console.log(count);
        setTimeout(() => {
            setCount(count + 1)
        }, 1000);
    }

    return (
        <>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={increment}>Click me</button>
            </div>
            <div style={{height: 2000, backgroundColor: '#f6f6f6'}}>
                {Array(10).fill().map(item => (
                    <div key={item} style={{height:200}}>测试内容</div>
                ))}
            </div>
            <div style={{height: '2rem',backgroundColor: 'red',position:'fixed', left:0,right:0,bottom:0,display: show ? 'block': 'none'}} onClick={handleClose}></div>
        </>
    )
}

export default HooksDemo;