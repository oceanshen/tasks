import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Question } from "../quizzer_interfaces/question";

export function AddQuestionModal({
    show,
    handleClose,
    addQuestion
}: {
    show: boolean;
    handleClose: () => void;
    addQuestion: (newQuestion: Question) => void;
}) {
    const [id, setId] = useState<number>(7);
    const [type, setType] = useState<string>("");

    function saveChanges() {
        addQuestion({
            id: id,
            name: "",
            body: "",
            type: "",
            options: [],
            expected: "",
            points: 0,
            published: false
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formQuestionId" as={Row}>
                    <Form.Label column sm={3}>
                        Question ID (default questions end at 6):
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(parseInt(event.target.value))}
                        />
                    </Col>
                    <Form.Label column sm={3}>
                        Question Type:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={type}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setType(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={saveChanges}>Save Question</Button>
            </Modal.Footer>
        </Modal>
    );
}
