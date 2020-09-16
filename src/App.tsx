import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/About';
import { Add } from './components/Add';
import { Add2 } from './components/Add2';
import { Cats } from './components/Cats';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import { NotFound404 } from './components/NotFound404';
import { PhotosList } from './components/PhotosList';
import { Post } from './components/Post';

import '../node_modules/boxicons/css/boxicons.min.css';

const App: React.FC = () => {
	return (
		<Router>
			<Navigation></Navigation>
			<Switch>
				<Route path='/' exact>
					<Home></Home>
				</Route>
				<Route path='/about'>
					<About></About>
				</Route>
				<Route path='/post/:id'>
					<Post></Post>
				</Route>
				<Route path='/add/:a/:b'>
					<Add></Add>
				</Route>
				<Route path='/add'>
					<Add2></Add2>
				</Route>
				<Route path='/photos'>
					<PhotosList></PhotosList>
				</Route>
				<Route path='/cats'>
					<Cats></Cats>
				</Route>
				<Route path='*'>
					<NotFound404></NotFound404>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
