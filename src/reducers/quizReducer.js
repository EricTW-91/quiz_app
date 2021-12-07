const initialState = {
    questions: [
        {id: '0', question:'Q1?', answer: 'true'},
        {id: '1', question:'Q2?', answer: 'true'},
        {id: '2', question:'Q3?', answer: 'true'},
        {id: '3', question:'Q4?', answer: 'true'},
        {id: '4', question:'Q5?', answer: 'true'},
        {id: '5', question:'Q6?', answer: 'true'},
        {id: '6', question:'Q7?', answer: 'true'},
        {id: '7', question:'Q8?', answer: 'true'},
        {id: '8', question:'Q9?', answer: 'true'},
        {id: '9', question:'Q10?', answer: 'true'},
    ],
    userAnswers: [
        { id: '0', answer: 'hi' },
        { id: '1', answer: 'hi' },
        { id: '2', answer: 'hi'},
        { id: '3', answer: 'hi' },
        { id: '4', answer: 'hi' },
        { id: '5', answer: '' },
        { id: '6', answer: '' },
        { id: '7', answer: '' },
        { id: '8', answer: '' },
        { id: '9', answer: '' },

    ]
}

const quizReducer = (state = initialState, action) => {
    switch (action) {
        case "SELECTANS":
            const result = state.userAnswers.map((obj) => {
                if (obj.id == action.payload.id) {
                    return obj.answer = action.payload.ans
                }
            })
            return { ...state, result}
            
        default:
            return state
    }
}

export default quizReducer;