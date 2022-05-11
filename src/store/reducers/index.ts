import {combineReducers} from "redux";
import {ArticleReducer} from "./articleReducer";


export const rootReducer = combineReducers({
    article: ArticleReducer
})

export type RootState = ReturnType<typeof  rootReducer>