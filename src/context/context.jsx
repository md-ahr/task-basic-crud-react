import { createContext, useReducer } from "react";
import { initialState, AppReducer } from "../reducer/appReducer";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
