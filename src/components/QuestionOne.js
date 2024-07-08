import './QuestionTwo.css';
import { useState, useEffect } from 'react';
function QuestionTwo() {
    const [arrayElement, setArrayElement] = useState('');
    const [mainArray, setMainArray] = useState([]);
    const [showGetAnswerButton, setShowGetAnswerButton] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (mainArray.length !== 0) {
            console.log('not empty')
            setShowGetAnswerButton(true);
        } else {
            setShowGetAnswerButton(false);
        }
    }, [mainArray]);

    const enterElementIntoArray = () => {
        setMainArray([...mainArray, parseInt(arrayElement)]);
        setArrayElement('');
    }
    const resetArray = () => {
        setMainArray([]);
        setResult(null);
    }

    const handleGetAnswerClicked = () => {
        console.log(mainArray);
        let unpaired = null;
        for (let i = 0; i < mainArray.length; i++) {
            let count = 0;
            for (let j = 0; j < mainArray.length; j++) {
                if (mainArray[i] === mainArray[j]) {
                    count = count + 1;
                }
            }
            if (count === 1) {
                unpaired = mainArray[i];
                setResult(unpaired);
            }

        }


    }



    return (
        <div className="question2-container">
            <h2 className="dynamic-text">No.1</h2>
            <div className="row">
                <h2 className="dynamic-text ">Enter array element</h2>

                <div className="input-container">
                    <input
                        type="number"
                        value={arrayElement}
                        onChange={(event) => {
                            setArrayElement(event.target.value)
                        }}
                        onKeyDown={(event) => {

                            if (event.key === "Enter") {
                                console.log('enter clicked');
                                enterElementIntoArray();
                            }
                        }}

                    />
                    <small className="dynamic-text">type value and press ENTER</small>
                </div>
                {/* <button onClick={enterElementIntoArray}>enter</button> */}
                <button onClick={resetArray}>reset array</button>
            </div>

            <div className="array-div">
                <h2 className="array-bracket dynamic-text">[</h2>
                {mainArray.map((i) => {
                    return (

                        <h2 className="dynamic-text" key={i}>
                            {i},
                        </h2>
                    )
                })}
                <h2 className="array-bracket dynamic-text">]</h2>

            </div>

            <div className="row">
                <h3 className="dynamic-text">Unpaired element = {result} </h3>

                {showGetAnswerButton === true
                    &&
                    <button onClick={handleGetAnswerClicked}>Get Answer</button>
                }

            </div>

        </div>
    )

}

export default QuestionTwo;