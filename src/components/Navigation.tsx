import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
	return (
		<div>
			<Link to='/'>Home</Link>
			<br />
			<Link to='/post/1'>Post 1</Link>
			<br />
			<Link to='/post/2'>Post 2</Link>
			<br />
			<Link to='/add/1/2'>Dodaj /1/2</Link>
			<br />
			<Link to='/add?a=1&b=2'>Dodaj ?a=1&b=2</Link>
			<br />
			<Link to='/about'>About</Link>
			<br />
			<Link to='/photos'>Photos list</Link>
		</div>
	);
};
