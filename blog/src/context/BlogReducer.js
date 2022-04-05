export const BlogReducer = (state, action) => {
    switch (action.type) {
        case "add":
            console.log("here")
            if (action.payload.title && action.payload.body) {
                const newState = [...state, action.payload]
                return newState
            }
            return state;
        case "delete":
            return state
        case "edit":
            return state
        default:
            return state;
    }
};
