import React, { useReducer } from "react";
import { BlogReducer } from "./BlogReducer";

/**
 * In the context file, first we need to create a context "BlogContext"
 * then we expose the context by creating the context's provider
 * the value prop add to provider is what can be later shared around,
 * later we can use the provider component to wrap other components
 * A wrapped component and its children components can then access all data in the context.
 */

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BlogReducer, [
        { title: "post#1", body: "xxxxxxxxxxxxxxxxxx" },
        { title: "post#2", body: "xxxxxxxxxxxxxxxxxx" },
    ]);

    return (
        <BlogContext.Provider value={{ data: state, dispatch }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
