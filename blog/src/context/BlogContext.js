import { BlogReducer } from "./BlogReducer";
import createDataContext from "./createDataContext";

export const { Context, Provider } = createDataContext(BlogReducer, []);
