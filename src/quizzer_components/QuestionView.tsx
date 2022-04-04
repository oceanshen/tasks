import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Question } from "../quizzer_interfaces/question";
// import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
// import { ShortAnswer } from "./ShortAnswer";

export function QuestionView({
    question,
    showUnPublished
}: {
    question: Question;
    addPoints: (addedPoints: number) => void;
    showUnPublished: boolean;
}): JSX.Element {
    return question.published || showUnPublished ? (
        <Container>
            <Row>
                <Col>
                    <h3 data-testid="question-name">{question.name}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6 data-testid="question-id">ID: {question.id}</h6>
                </Col>
            </Row>
            <Row>
                <p>Worth {question.points} points</p>
                <h4>{question.body}</h4>
            </Row>
        </Container>
    ) : (
        <div> </div>
    );
}
