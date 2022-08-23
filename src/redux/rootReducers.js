import { combineReducers } from "redux";
import blogReducer from "./blogs/blogReducer";
const rootReducers=combineReducers({
    blogs:blogReducer
})
export default rootReducers;