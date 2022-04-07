import React, { useReducer } from "react";

/**
 * In the context file, first we need to create a context
 * then we expose the context by creating the context's provider
 * the value prop add to provider is what can be later shared around,
 * later we can use the provider component to wrap other components
 * A wrapped component and its children components can then access all data in the context.
 */

export default (reducer,initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <Context.Provider value={{ state, dispatch }}>
                {children}
            </Context.Provider>
        );
    };
    return {Context,Provider}
};
