const initialState = {
    firstName: '',
    lastName: '',
    email: ''
}

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATEINFO":
            return {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            }
        default:
            return state
    }
}

export default userInfoReducer;