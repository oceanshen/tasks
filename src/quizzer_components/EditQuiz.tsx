import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Question } from "../quizzer_interfaces/question";
import { Quiz } from "../quizzer_interfaces/quiz";
import { AddQuestionModal } from "./AddQuestion";
import { QuestionEditor } from "./EditQuestion";

export function QuizEditor({
    changeEditing,
    quiz,
    editQuiz,
    deleteQuiz,
    setQuestions,
    questions
}: {
    changeEditing: () => void;
    quiz: Quiz;
    editQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
    setQuestions: (questions: Question[]) => void;
    questions: Question[];
}): JSX.Element {
    const [title, setTitle] = useState<string>(quiz.title);
    const [description, setDescription] = useState<string>(quiz.description);
    const [addModal, setAddModal] = useState(false);

    const openAddModal = () => setAddModal(true);
    const closeAddModal = () => setAddModal(false);

    function save() {
        editQuiz(quiz.id, {
            ...quiz,
            title: title,
            description: description,
            questions: questions
        });
        changeEditing();
    }

    function moveQuestionUp(question: Question) {
        const index = questions.indexOf(question);
        if (index === 0) return;
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        newQuestions.splice(index - 1, 0, question);
        setQuestions(newQuestions);
    }

    function moveQuestionDown(question: Question) {
        const index = questions.indexOf(question);
        if (index === questions.length - 1) return;
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        newQuestions.splice(index + 1, 0, question);
        setQuestions(newQuestions);
    }

    function addQuestion(newQuestion: Question) {
        const existing = questions.find(
            (question: Question): boolean => question.id === newQuestion.id
        );
        if (existing === undefined) {
            setQuestions([...questions, newQuestion]);
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="formQuizTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formQuizDescription" as={Row}>
                        <Form.Label column sm={2}>
                            Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <QuestionEditor
                        questions={questions}
                        setQuestions={setQuestions}
                        MoveQuestionUp={moveQuestionUp}
                        MoveQuestionDown={moveQuestionDown}
                    ></QuestionEditor>
                    <div>
                        <Button
                            variant="info"
                            className="m-4"
                            onClick={openAddModal}
                        >
                            Add New Question
                        </Button>
                        <AddQuestionModal
                            show={addModal}
                            handleClose={closeAddModal}
                            addQuestion={addQuestion}
                        ></AddQuestionModal>
                    </div>
                    <Button onClick={save} className="me-4">
                        Save Quiz
                    </Button>
                    <Button onClick={() => deleteQuiz(quiz.id)}>
                        Delete Quiz
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
