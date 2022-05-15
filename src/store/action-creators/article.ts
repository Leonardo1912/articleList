import {Dispatch} from "redux";
import {ArticlesAction, ArticlesActionTypes} from "../../types/articles";
import axios from "axios";

export const fetchArticles = (search: string) => {
    return async (dispatch: Dispatch<ArticlesAction>) => {
        try {
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES})
            const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/?_limit=6&_title_contains=${search}`)
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
                payload: "Произошла ошибка при получении статей"
            })
        }
    }
}
export const fetchArticle = (id: number) => {
    return async (dispatch: Dispatch<ArticlesAction>) => {
        try {
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES})
            const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLE_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
                payload: "Произошла ошибка при получении стати"
            })
        }
    }
}