import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Hello!',
			like: false,
			input: 'default'
		};
		// This line is important! 如果handleClick是函数表达式
		// this.handleClick = this.handleClick.bind(this);
	}
	handleClick = () => {
		// alert(this.state.message);
		this.setState({ liked: !this.state.liked });
	}
	handleChange = (e) => {
		this.setState({ input: e.target.value });
	}
	render() {
		if (!this.props.style) {
			return null;
		}
		const text = this.state.liked ? 'like' : 'haven\'t liked';
		return (
			<header className="clearfix" onClick={this.handleClick}>
				<div className="menu">
					<ul className="clearfix">
						<li style={{ float: 'left' }}>You {text} this. Click to toggle &middot;.</li>
						<li style={{ float: 'left' }}>
							<input value={this.state.input} onChange={this.handleChange} />
						</li>
						<li style={{ float: 'left' }}>
							<input value={this.state.input} onChange={this.handleChange} />
						</li>
					</ul>
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	style: PropTypes.string
};

Header.defaultProps = {
	style: 'top-header'
};

export default Header;
