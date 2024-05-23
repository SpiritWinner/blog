import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectArticles } from '../features/articles/articlesSlice';
import Layout from './Layout';
import Article from './Article';
import StatsTable from './StatsTable';
import './ArticleList.scss';

const ArticleList: React.FC = () => {
  const articles = useSelector(selectArticles);
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearch = (query: string) => {
    setFilteredArticles(
      articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
      <Layout onSearch={handleSearch} >
      <div className='article-list'>
        <ul>
          {filteredArticles.map(article => (
            <li key={article.id}>
              <Article 
                id={article.id} 
                title={article.title} 
                description={article.description} 
                image={article.image}  
              />
            </li>
          ))}
        </ul>
      </div>
      <StatsTable />
    </Layout>
  );
};

export default ArticleList;
