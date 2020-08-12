import React from 'react';
import _ from 'lodash';
import Promise1 from '../utils/promise';
import useScreenShot from '../hooks/screenShot';
// import Worker from '../worker/math.worker';

const script = `
var fibo = function fibo (n) {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
};

self.addEventListener('message', function (e) {
    console.log(e.data)
    var n = e.data.args;
    var result = fibo(n)
    self.postMessage(result);
    console.log('You said: ' + result);
}, false);
`;

const workerBlob = new Blob([script], { type: "text/javascript" });
const url = URL.createObjectURL(workerBlob);
const worker = new Worker(url);

// const worker = new Worker();

const {useState, useCallback, useEffect, useMemo} = React;
const Test = () => {
    console.log('start')
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(1);
    const [fibo, setFibo] = useState(1);

    const dd = useScreenShot();
    const listener = useCallback(() => {
        if(document.documentElement.scrollTop > 200){
            setShow(true);
        }
    }, []);
    useEffect(() => {
        document.addEventListener('scroll', listener)
        console.log('2'+show);

        new Promise1((resolve, reject) => {
            setTimeout(() => {
                resolve(2);
            }, 200);
        });

        worker.onmessage = function (event) {
            console.log('Received message ' + event.data);
            setFibo(event.data);
            worker.terminate();
            console.timeEnd()
        }
    },[])

    const handleCount = () => {
        console.time()
        worker.postMessage({method: 'fibo', args: value})
    }

    const handleClose = () => {
        setShow(false);
        document.removeEventListener('scroll', listener)
    }

    const handleMonitor = () => {
        console.log(error);
    }
    return (
        <>
            <div style={{height: 2000, backgroundColor: '#f6f6f6'}}>
                <input value={value} onChange={e => setValue(e.currentTarget.value)}/>
                <input type="button" value="计算" onClick={handleCount}/>
                <div>
                    <label>斐波那契数列第{value}项是：</label>
                    <span>{fibo}</span>
                </div>
                <div style={{color: '#333'}}>{show.toString()}</div>
                <div>
                    <input type="button" value="监控" onClick={handleMonitor}/>
                </div>
            </div>
            <div style={{height: '2rem',backgroundColor: '#eee',position:'fixed', left:0,right:0,bottom:0,display: show ? 'block': 'none'}} onClick={handleClose}></div>
        </>
    )
}

export default Test;