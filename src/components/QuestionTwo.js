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

        const sortedArray = [...mainArray]
        sortedArray.sort();

        let smallestPositiveInteger = 1;
        let i = 0;
        while (i < sortedArray.length) {
            if (smallestPositiveInteger === sortedArray[i]) {
                smallestPositiveInteger = smallestPositiveInteger + 1;
                setResult(smallestPositiveInteger);
            }
            else {
                setResult(smallestPositiveInteger)
            }
            i++;
        }

    }


    return (
        <div className="question2-container">
            <h2 className="dynamic-text">2nd question solution:</h2>
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
                <h3 className="dynamic-text">Smallest positive Integer = {result} </h3>

                {showGetAnswerButton === true
                    &&
                    <button onClick={handleGetAnswerClicked}>Get Answer</button>
                }

            </div>

        </div>
    )

}

export default QuestionTwo;