import React from "react";
// { Suspense, useState } 
import ReactDOM from "react-dom";

import "./index.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// const Header = React.lazy(() => import( "home/Header"));

import Header from "home/Header";
import Footer from "home/Footer";

import SafeComponent from "./SafeComponent";

import PDPContent from "./PDPContent";


const App = () => {
	// const [showHeader, setShowHeader] = useState(false)


	return (
		<Router>
			<div className="text-3xl mx-auto max-w-6xl">

				<SafeComponent>
					<Header />
				</SafeComponent>

				<div className="my-10">
					<Switch>
						<Route path="/product/:id" component={PDPContent}  />
					</Switch>
				</div>

				<Footer />


				{/* {
					showHeader &&
					<Suspense fallback={<div>Loading</div>}>
						<Header />
					</Suspense>
				}

				
				<button 
					className="text-3xl p-5"
					onClick={() => setShowHeader(!showHeader)}
				>
					Show The Header
				</button>

					<div className="my-10">PDP Page Content</div>
				<Footer /> */}
			</div>
		</Router>
	)
};



ReactDOM.render(<App />, document.getElementById("app"));
