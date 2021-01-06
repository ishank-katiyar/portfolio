import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
	return (
		<div>
			<div className="bg-dark">
				<div className="p-5">
					<Container>
						<Row>
							<Col>
								<div
									className="text-center text-light font-italic font-weigth-bold"
									style={{ fontSize: 20 }}
								>
									@ ishankkkatiyar162@gmail.com
								</div>
							</Col>
							<Col>
								<div
									className="text-center text-light font-italic font-weigth-bold"
									style={{ fontSize: 20 }}
								>
									@ +91-6387898042
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</div>
	);
}

export default Footer;
