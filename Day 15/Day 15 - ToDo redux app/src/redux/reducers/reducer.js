const Initial_State = {
    User_data: []
}

export const todoreducers = (state = Initial_State, action) => {
    switch (action.type) {
        case "ADD_DATA":

            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }
    default:
                return state
    }
}   