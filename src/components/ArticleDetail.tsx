import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectArticles, addComment } from '../features/articles/articlesSlice';
import Layout from './Layout';
import './ArticleDetail.scss';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');
  
  const articles = useSelector(selectArticles);
  
  if (!id) {
    return <div>Некорректный идентификатор статьи</div>;
  }

  const articleId = parseInt(id, 10);
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      dispatch(addComment({ articleId, comment: newComment }));
      setNewComment('');
    }
  };

  return (
    <Layout onSearch={() => {}}>
    <div className='articleDetail'>
      <img src={article.image} alt={article.title} className="articleImage" />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <h3>Комментарии:</h3>
      <ul>
        {article.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Добавить комментарий"
        />
        <button onClick={handleAddComment}>Добавить</button>
      </div>
    </div>
    </Layout>
  );
};

export default ArticleDetail;
