import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';

function Home(props) {
	return (
		<Router>
			<div>
				<h1>Welcome to my Portfolio site</h1>
				<div className="protfolio-links">
					<Link className="link" to="/blog">Blog</Link>
					<Link className="link" to="/about">About</Link>
					<Link className="link" to="/projects">Projects</Link>
				</div>
				<Route path="/blog" component={Blog} />
				<Route path="/about" component={About} />
				<Route path="/projects" component={Projects} />
			</div>
		</Router>
	)
}
export default Home;