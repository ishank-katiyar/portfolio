import React from "react";
import { Jumbotron } from "react-bootstrap";
import { MDBIcon, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function AboutMe() {
	return (
		<div>
			{/* https://react-bootstrap.github.io/components/jumbotron/ */}
			<Jumbotron className="rounded-circle border m-4">
				<div className="container">
					<div className="p-2">
						<div
							className="text-center font-italic font-weight-bold"
							style={{ fontSize: 20 }}
						>
							<p>
								<MDBIcon icon="quote-left" />
								<br />
								Hi, I'm a pre-final year undergraduate student at HBTU (Harcourt
								Butler Technical University, Kanpur), pursuing B. Tech in
								Computer science and engineering. I have a keen interest in Data
								structure and algorithms, I participated in many Short and Long
								Contest hosted by websites such as codeforces, CodeChef,
								leetcode, etc. I solved 1500+ problems and had taken part in
								200+ contest.
								<br />
								<MDBIcon icon="quote-right" />
							</p>
						</div>
					</div>
				</div>
			</Jumbotron>
		</div>
	);
}

export default AboutMe;
