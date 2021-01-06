import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBIcon, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styled from "styled-components";

const color1 = "#FED54A";
const color2 = "#FF9347";

// https://css-tricks.com/snippets/css/gradient-text/
// https://uicolorpicker.com/gradients
const Div = styled.div`
	background: -webkit-linear-gradient(${color1}, ${color2});
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

// https://mdbootstrap.com/docs/react/content/icons-list/
// https://mdbootstrap.com/docs/react/components/buttons/
// https://stackoverflow.com/questions/50333710/how-to-make-a-gradient-background-in-react-with-single-color
function Info() {
	return (
		<div>
			<div>
				<h1 style={{ fontSize: 150 }}>
					<Container className="m-4">
						<Row>
							<Col>Hi, </Col>
						</Row>
						<Row>
							<Col>
								I'm<Div>Ishank Katiyar</Div>
							</Col>
						</Row>
					</Container>
				</h1>
			</div>
			<div>
				<Container className="m-5">
					{/*  */}
					<Fragment>
						<MDBBtn
							color="primary"
							gradient="dusty-grass"
							href="https://www.codechef.com/users/ishank_kat162"
							size="lg"
							className="ml-2 mr-2"
						>
							Codechef
						</MDBBtn>
						<MDBBtn
							color="primary"
							gradient="dusty-grass"
							href="https://codeforces.com/profile/ishank162"
							size="lg"
							className="ml-2 mr-2"
						>
							Codeforces
						</MDBBtn>
						<MDBBtn
							color="primary"
							gradient="dusty-grass"
							href="https://leetcode.com/ishank162/"
							size="lg"
							className="ml-2 mr-2"
						>
							Leetcode
						</MDBBtn>
						<MDBBtn
							color="primary"
							gradient="dusty-grass"
							href="https://www.linkedin.com/in/ishank-katiyar-30312a170/"
							className="ml-2 mr-2"
						>
							<MDBIcon fab icon="linkedin-in" size="2x" />
						</MDBBtn>
						<MDBBtn
							color="primary"
							gradient="dusty-grass"
							href="https://github.com/ishank-katiyar"
							className="ml-2 mr-2"
						>
							<MDBIcon fab icon="github" size="2x" />
						</MDBBtn>
						<MDBBtn
							color="primary"
							gradient="dusty-grass"
							href="https://www.facebook.com/ishank.katiyar.35/"
							className="ml-2 mr-2"
						>
							<MDBIcon fab icon="facebook" size="2x" />
						</MDBBtn>
						<MDBBtn
							color="primary"
							gradient="dusty-grass"
							href="https://www.instagram.com/ishankkatiyar/"
							className="ml-2 mr-2"
						>
							<MDBIcon fab icon="instagram" size="2x" />
						</MDBBtn>
					</Fragment>
				</Container>
			</div>
		</div>
	);
}

export default Info;
