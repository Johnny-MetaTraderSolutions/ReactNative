export const BlogReducer = (state, action) => {
    switch (action.type) {
        case "add":
            if (action.payload.title && action.payload.body) {
                let newId = Math.floor(Math.random() * 99999);
                while (!state.filter((i) => i.id === newId)) {
                    newId = Math.floor(Math.random() * 99999);
                }
                action.payload.id = Math.floor(Math.random() * 99999);
                const newState = [...state, action.payload];
                return newState;
            }
            return state;
        case "delete":
            const newState = state.filter((i)=>i.id !== action.payload)
            return newState
        case "edit":
            return state;
        default:
            return state;
    }
};
