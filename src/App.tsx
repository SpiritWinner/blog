import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './app/store';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import AddArticle from './components/AddArticle';
import './index.css';

const App: React.FC = () => {
  return (
    <Provider store={store}> 
    <Router  basename="/blog">
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/add-article" element={<AddArticle />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
