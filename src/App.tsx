import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ArticleList from "./components/ArticleList/ArticleList";
import Article from "./components/ArticleList/Article/Article";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/articleList" element={<ArticleList />} />
                <Route path="/articleList/article/:id" element={<Article />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
