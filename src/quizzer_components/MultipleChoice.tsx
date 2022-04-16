import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
    addPoints,
    points
}: {
    options: string[];
    expectedAnswer: string;
    addPoints: (addedP: number) => void;
    points: number;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    const [lastCorrect, setLastCorrect] = useState<boolean>(false);

    function updateAns(event: ChangeEvent) {
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
            <h1> Multiple Choice Question </h1>
            <Form.Label> Choose an Answer: </Form.Label>
            <Form.Select value={answer} onChange={updateAns}>
                {options.map(
                    (dropOption: string): JSX.Element => (
                        <option key={dropOption} value={dropOption}>
                            {dropOption}
                        </option>
                    )
                )}
            </Form.Select>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
