import {ArticlesAction, ArticlesActionTypes, ArticleState} from "../../types/articles";


const initialState: ArticleState = {
    articles: [],
    article: [],
    loading: false,
    error: null,
}

export const ArticleReducer = (state = initialState, action: ArticlesAction): ArticleState => {
    switch (action.type) {
        case ArticlesActionTypes.FETCH_ARTICLES:
            return {loading: true, error: null, articles: [], article: []}
        case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS:
            return {loading: false, error: null, articles: action.payload, article: []}
        case ArticlesActionTypes.FETCH_ARTICLE_SUCCESS:
            return {loading: false, error: null, article: action.payload, articles: []}
        case ArticlesActionTypes.FETCH_ARTICLES_ERROR:
            return {loading: false, error: action.payload, articles: [], article: []}
        default:
            return state
    }
}