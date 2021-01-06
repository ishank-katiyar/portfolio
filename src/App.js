import React from "react";
import Info from "./Body/Info.js";
import Middle from "./Body/middle.js";
import ASDF from "./Body/Paper.js";
import Footer from "./Body/Footer.js";

function App() {
	return (
		<div>
			<div>
				<Info />
			</div>
			<div>
				<Middle />
			</div>
			<div>
				<ASDF />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;

/*

https://getbootstrap.com/docs/4.0/components/alerts/

<Button onClick={() => { window.open( `mailto:${MyEmail}?subject=Test_Subject&body=Test_Body`);}}>

checkout this => https://learntocodewith.me/posts/portfolio-tips/ 
*/
