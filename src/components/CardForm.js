import React from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Card,
    CardTitle,
    CardText,
} from "reactstrap";

function CardForm() {
    return (
        <Card body className="message-form">
            <CardTitle>Welcome to my map</CardTitle>
            <CardText>Leave a message</CardText>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        value={state.userMessage.name}
                        id="name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input
                        type="textarea"
                        name="message"
                        value={state.userMessage.message}
                        id="message"
                        onChange={handleChange}
                        placeholder="enter a message"
                    />
                </FormGroup>
                <Button
                    type="submit"
                    color="info"
                    disabled={!state.hasUserLocation}
                >
                    Submit
                </Button>
            </Form>
        </Card>
    );
}

export default CardForm;
