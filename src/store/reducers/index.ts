import {combineReducers} from "redux";
import {ArticleReducer} from "./articleReducer";


export const rootReducer = combineReducers({
    article: ArticleReducer
})