import React, { useState, useEffect } from 'react';
import Question from '../components/question';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { selectAnswers } from '../actions/quizAction';

const Quiz = () => {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [correctCount, setCorrectCount] = useState(0)
    const data = useSelector((state) => state.quizReducer)
    const user = useSelector((state) => state.userInfoReducer)
    const dispatch = useDispatch()

    const handleAnswer = (e) => {
        dispatch(selectAnswers({ id: questionIndex, ans: e.target.value }))
        console.log(data)
        if (e.target.value == data.questions[questionIndex].answer) {
            setCorrectCount(correctCount + 1)
        }


        setQuestionIndex(questionIndex + 1)
    }

    return (questionIndex <= 9)?(
        <div className="quizSection">
            <h1>{ data.questions[questionIndex].question }</h1>
            <Button
                variant="outlined"
                color="success"
                value={true}
                onClick={handleAnswer}
            >True</Button>
            <Button
                variant="outlined"
                color="error"
                value={false}
                onClick={handleAnswer}
            >False</Button>

            <p>{user.firstName}</p>
            <p>{ JSON.stringify(data.userAnswers) }</p>
        </div>
    ) : (
            <div className="final">
                <h1>{user.firstName} {user.lastName}</h1>
                <h1>You've finished your quiz!!!</h1>
                <h1>{ correctCount }</h1>
            </div>
    )
}

export default Quiz;