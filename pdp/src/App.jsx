import React from "react";
// { Suspense, useState } 
import ReactDOM from "react-dom";

import "./index.scss";

// import Header from "home/Header";
const Header = React.lazy(() => import( "home/Header"));

import Footer from "home/Footer";

// import SafeComponent from "./SafeComponent";


const App = () => {
	// const [showHeader, setShowHeader] = useState(false)


	return (
		<div className="text-3xl mx-auto max-w-6xl">

			{/* <SafeComponent> */}
				<Header />
			{/* </SafeComponent> */}

			<div className="my-10">PDP Page Content</div>

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
	)
};



ReactDOM.render(<App />, document.getElementById("app"));
