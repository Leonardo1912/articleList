export interface ArticleState {
    articles: any[],
    article: any,
    loading: boolean,
    error: null | string
}

export enum ArticlesActionTypes {
    FETCH_ARTICLES = 'FETCH_ARTICLES',
    SET_ID = 'SET_ID',
    FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
    FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
    FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',

}

interface FetchArticlesAction {
    type: ArticlesActionTypes.FETCH_ARTICLES
}

interface FetchArticleSuccessAction {
    type: ArticlesActionTypes.FETCH_ARTICLE_SUCCESS
    payload: any[]
}

interface SetID {
    type: ArticlesActionTypes.SET_ID
    payload: number
}

interface FetchArticlesSuccessAction {
    type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS
    payload: any[]
}

interface FetchArticlesErrorAction {
    type: ArticlesActionTypes.FETCH_ARTICLES_ERROR
    payload: string
}

export type ArticlesAction =
    FetchArticlesAction
    | FetchArticlesSuccessAction
    | FetchArticlesErrorAction
    | FetchArticleSuccessAction
    | SetID
