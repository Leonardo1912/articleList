import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypeSelector";
import {fetchArticle} from "../../store/action-creators/article";
import {useActions} from "../../hooks/useActions";
import "./ArticleList.scss"

const ArticleList: React.FC = () => {
    const moment = require('moment');
    const {articles, loading, error} = useTypedSelector(state => state.article)
    const {fetchArticle} = useActions()
    useEffect(() => {
        fetchArticle()
    }, [])

    if (loading) {
        return <div>LOADING...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="Article-list">
            <div className="search-block">
                <div className="title-search">Filter by keywords</div>
                <div className="search"><input type="search" placeholder="Search"/></div>
            </div>
            <div className="content">
                <div className="result">Result:</div>
                <div className="articles">
                    {articles.map(article => <div key={article.id} className="article">
                        <div className="photo" style={{backgroundImage:`url(${article.imageUrl})`}}></div>
                        <div className="description">
                            <div className="date">{moment(article.publishedAt).format("MMMM Do, YYYY")}</div>
                            <div className="content-article">
                                <div className="title-article">{article.title}</div>
                                <div className="description-article">{article.summary}</div>
                                <div className="read-more">Read more</div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default ArticleList;