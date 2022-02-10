// Will be the component for the form that renders on the start page as well as the working page
import React from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";

export default function MaterialForm() {
	// form will ask for material type, inner dimension, outer dimension
	// on clicking submit, the form does NOT reset to show blank text fields
	// on clicking submit, the frequency table renders

	return (
		<Container>
			<Form>
				<Form.Group as={Row}>
					<Col>
						<Form.Label>Test Label</Form.Label>
					</Col>
					<Col>
						<Form.Select>
							<option>Select a material type</option>
							<option>Aluminum</option>
							<option>Brass</option>
							<option>Cast Iron</option>
							<option>Copper</option>
							<option>Steel</option>
							<option>Stainless Steel</option>
							<option>Titanium</option>
						</Form.Select>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Col>
						<Form.Label>Outer Diameter</Form.Label>
					</Col>
					<Col>
						<Form.Control placeholder="Outer Diameter"></Form.Control>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Col>
						<Form.Label>Inner Diameter</Form.Label>
					</Col>
					<Col>
						<Form.Control placeholder="Inner Diameter"></Form.Control>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Col>
						<Button type="submit">Submit</Button>
					</Col>
				</Form.Group>
			</Form>
		</Container>
	);
}
