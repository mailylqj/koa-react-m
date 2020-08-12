import React from 'react';
import axios from 'axios';
// import WebSocket from 'ws';

import BinaryTree from '../utils/binaryTree';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1
		};
	}
	componentDidMount() {
		this.socket = new WebSocket('ws://localhost:8090/ws/chat');
		this.socket.onopen = () => this.onSocketOpen();
		this.socket.onmessage = (m) => this.onSocketData(m);
		this.socket.onclose = () => this.onSocketClose();
	}
	onSocketOpen() {
		console.log('Connection established!');
		this.BT = new BinaryTree([10,5,12,3,7,2,4]);
		console.log(this.BT)
		this.BT.querySum(22);
	}
	onSocketData(data) {
		console.log(data);
		// this.socket.send('hello');
		let result = JSON.parse(data.data);
		this.setState({ count: result.count });
	}
	onSocketClose() {
		console.log('Connection closed!');
	}
	handleChange = (e) => {
		let msg = { count: e.target.value };
		this.setState({ count: e.target.value });
		this.socket.send(JSON.stringify(msg));
	}
	sendMessage = (e) => {
		axios.post('/ajax/setMessage').then(function(data){
			console.log(data);
		});
	}

	getMessage = (e) => {
		axios.post('/ajax/getMessage').then(function(data){
			console.log(data);
		});
	}
	render() {
		return (
			<div className="page">
				<div className="panel panel-default">
					<div className="panel-heading">
						<span className="glyphicon glyphicon-th"></span>
						<span>Data</span>
					</div>
					<div className="panel-body">
						<ul>{this.state.count}</ul>
						<input type="text" className="form-control" value={this.state.count} onChange={this.handleChange} />
						<button className="btn btn-w-md btn-primary" onClick={this.sendMessage}>发送消息</button>
						<button className="btn btn-w-md btn-primary" onClick={this.getMessage}>获取消息</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Index;