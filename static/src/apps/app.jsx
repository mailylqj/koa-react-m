import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import Herder from '../include/header.jsx';
// import Aside from '../include/aside.jsx';
import Main from '../include/main.jsx';
import 'antd/dist/antd.less';
const App = () => {
	return (
		<BrowserRouter>
			<div className={`wapper`}>
				<Main/>
			</div>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />,
	document.getElementById('container'));
