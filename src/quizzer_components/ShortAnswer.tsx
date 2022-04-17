import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnswer({
    expectedAnswer,
    points,
    addPoints
}: {
    expectedAnswer: string;
    points: number;
    addPoints: (addedPoints: number) => void;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [lastCorrect, setLastCorrect] = useState<boolean>(false);

    function updateGivenAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
        if (event.target.value !== expectedAnswer) {
            if (lastCorrect === true) {
                addPoints(-points);
                setLastCorrect(false);
            }
        } else {
            setLastCorrect(true);
            addPoints(points);
        }
    }
    return (
        <div>
            <h6>Short Answer Question</h6>
            <Form.Group controlId="formGivenAnswer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateGivenAnswer}
                    placeholder="Enter Answer Here"
                ></Form.Control>
            </Form.Group>
            <div> Result: {answer === expectedAnswer ? "✔️" : "❌"} </div>
        </div>
    );
}
