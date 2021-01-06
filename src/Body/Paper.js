import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Resume from "../Assets/resume.pdf";
import styled from "styled-components";

const color1 = "#FD297A";
const color2 = "#9424F0";
const color3 = "#253898";
const color4 = "#5737D6";
const MyEmail = "ishankkatiyar162@gmail.com";

// https://css-tricks.com/snippets/css/gradient-text/
// https://uicolorpicker.com/gradients
const Div = styled.div`
	background: -webkit-linear-gradient(${color1}, ${color2});
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
const Div1 = styled.div`
	background: -webkit-linear-gradient(${color3}, ${color4});
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

function F() {
	console.log("called F");
	window.open(`mailto:${MyEmail}?subject=Test_Subject&body=Test_Body`);
}

function Paper() {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<p className="font-italic" style={{ fontSize: 80 }}>
							<a href={Resume} download>
								<Div1>Resume</Div1>
							</a>
						</p>
					</Col>
					<Col>
						<div className="font-italic" style={{ fontSize: 80 }}>
							<a href="#" onClick={F}>
								<Div>Get In Touch</Div>
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Paper;
