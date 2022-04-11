export const BlogReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((i) => i.id !== action.payload);
        case "save":
            if(action.payload.newBlog){
                return [...state, action.payload.blogInfo];
            }else{
                const notChangedBlogs = state.filter((i) => i.id !== action.payload.blogInfo.id)
                return [...notChangedBlogs, action.payload.blogInfo];
            }
            
        default:
            return state;
    }
};
