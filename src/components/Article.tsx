import React from 'react';
import { Link } from 'react-router-dom';
import './Article.scss';

interface ArticleProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Article: React.FC<ArticleProps> = ({ id, title, description, image }) => {
  return (
    <div className="article">
      <img src={image} alt={title} className="articleImage" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/article/${id}`}>Подробнее</Link>
    </div>
  );
};

export default Article;
