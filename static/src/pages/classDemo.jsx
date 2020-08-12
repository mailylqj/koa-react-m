import React from 'react';

class ClassDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }
    componentDidMount(){
        document.addEventListener('scroll', this.listener)
    }
    handleClose = () => {
        this.setState({ show: false })
        document.removeEventListener('scroll', this.listener)
    }
    listener = () => {
        // const { show } = this.state;
        if(document.documentElement.scrollTop > 200){
            // console.log('scroll')
            // if (show) return;
            this.setState({ show: true })
        }
    }
    render(){
        const { show } = this.state;
        console.log('re-render', show);
        return(
            <>
                <div style={{height: 2000, backgroundColor: '#f6f6f6'}}>
                    {Array(10).fill().map((item, index) => (
                        <div key={index} style={{height:200, textAlign: 'center', borderBottom: '1px solid #7a7a7a'}}>测试内容{index}</div>
                    ))}
                </div>
                <div style={{height: '2rem',backgroundColor: 'red',position:'fixed', left:0,right:0,bottom:0,display: show ? 'block': 'none'}} onClick={this.handleClose}></div>
            </>
        )
    }
}

export default ClassDemo;