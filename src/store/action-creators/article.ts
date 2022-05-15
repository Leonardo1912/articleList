import {Dispatch} from "redux";
import {ArticleAction, ArticleActionTypes} from "../../types/articles";
import axios from "axios";


export const fetchArticle = (search:string) => {
    return async (dispatch: Dispatch<ArticleAction>) => {
        try {
            dispatch({type: ArticleActionTypes.FETCH_ARTICLES})
            const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/?_limit=6&_title_contains=${search}`)
            dispatch({type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS, payload: response.data})
        }
        catch (e) {
            dispatch({
                type: ArticleActionTypes.FETCH_ARTICLES_ERROR,
                payload: "Произошла ошибка при получении статей"
            })
        }
    }
}