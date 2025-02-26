import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Quiz } from "../quizzer_interfaces/quiz";

export function AddQuizModal({
    show,
    handleClose,
    addQuiz
}: {
    show: boolean;
    handleClose: () => void;
    addQuiz: (newQuiz: Quiz) => void;
}) {
    const [id, setId] = useState<number>(3);

    function saveChanges() {
        addQuiz({
            id: id,
            title: "",
            description: "",
            questions: []
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formQuizID" as={Row}>
                    <Form.Label column sm={3}>
                        Quiz ID:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={saveChanges}>Save New Quiz</Button>
            </Modal.Footer>
        </Modal>
    );
}
