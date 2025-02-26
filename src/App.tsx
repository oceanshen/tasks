import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";

/*
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Container, Col, Row, Button } from "react-bootstrap";
*/

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Ocean Shen: UD CISC275 with React Hooks and TypeScript!
            </header>
            <Quizzer></Quizzer>
            <hr></hr>
            <h1> Sketch </h1>
            <div>
                <img src={require("./shensketch.png")} />
            </div>
            <hr></hr>
            <h1> Requirements </h1>
            <ul>
                <li> See list of quizzes </li>
                <li> Select specific quiz </li>
                <li> Two types of questions: MC and SA </li>
                <li> Check to see if answer is correct </li>
                <li> Show total points </li>
                <li> Clear existing quiz answers </li>
                <li> Publish/unpublish question </li>
                <li> Filter questions so only published ones are seen </li>
                <li> Edit questions/fields </li>
                <li> Add new/delete quiz question </li>
                <li> Reorder quiz </li>
                <li> Add new/delete quiz </li>
            </ul>
            {/* 
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <h1>Hello World!</h1>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p></p>
            <Container>
                <Row>
                    <Col>
                        Who is Ocean Shen?
                        <ul>
                            <li>I am a sophomore CS and STAT double major.</li>
                            <li>I like to code, eat, and sleep.</li>
                            <li>
                                I was introduced to programming through Python.
                            </li>
                        </ul>
                        <div
                            style={{
                                height: 50,
                                width: 200,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <p>
                            Here is a picture of food I like to eat when coding:
                        </p>
                        <img
                            height="70%"
                            width="50%"
                            src="https://media.chefdehome.com/740/0/0/salsa/homemade-salsa.jpg"
                            alt="A picture of chips being dipped in salsa"
                        />
                        <p></p>
                        <div
                            style={{
                                height: 50,
                                width: 200,
                                backgroundColor: "red"
                            }}
                        ></div>
                        <p></p>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            */}
        </div>
    );
}

export default App;
