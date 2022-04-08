export const BlogReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((i) => i.id !== action.payload);
        case "save":
            return state;
        default:
            return state;
    }
};
