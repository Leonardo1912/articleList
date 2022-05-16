import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import "./ArticleList.scss"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Highlighter from "../Highlighter/Highlighter"
import {Link} from "react-router-dom";

const ArticleList: React.FC = () => {
    const moment = require('moment');
    const {articles, error} = useTypedSelector(state => state.article)
    const {fetchArticles} = useActions()
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetchArticles(search)
    }, [search])
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="Article-list">
            <div className="search-block">
                <div className="title-search">Filter by keywords</div>
                <div className="search">
                    <IconButton type="submit" sx={{p: '10px', m: "10px"}} aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                    <InputBase
                        autoFocus
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        sx={{ml: 1, flex: 1, display: "flex", alignItems: "center"}}
                        placeholder="Search"
                        inputProps={{'aria-label': 'search google maps'}}
                    />
                </div>
            </div>
            <div className="content">
                <div className="result">Result: {articles.length}</div>
                <div className="articles">
                    {articles.map(article => <div key={article.id} className="article">
                        <div className="photo" style={{backgroundImage: `url(${article.imageUrl})`}}></div>
                        <div className="description">
                            <div className="date">
                                <CalendarTodayOutlinedIcon sx={{width: "16px", height: "16px", marginRight: "10px"}}/>
                                <span>{moment(article.publishedAt).format("MMMM Do, YYYY")}</span>
                            </div>
                            <div className="content-article">
                                <div className="data-article">
                                    <div className="title-article">
                                        <Highlighter filter={search} text={article.title}/>
                                    </div>
                                    <div className="description-article">
                                        <Highlighter filter={search} text={article.summary.substring(0, 100)}/>...
                                    </div>
                                </div>
                                <Link to={`/articleList/article/${article.id}`} className="read-more">
                                    <span className="text">Read more</span>
                                    <ArrowForwardIcon
                                    sx={{fontSize: "12px",}}/>
                                </Link>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default ArticleList;