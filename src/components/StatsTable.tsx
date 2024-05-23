import React from 'react';
import { useSelector } from 'react-redux';
import { selectArticles } from '../features/articles/articlesSlice';
import './StatsTable.scss';


const StatsTable: React.FC = ( ) => {
  const articles = useSelector(selectArticles);
  const totalArticles = articles.length;
  const totalChars = articles.reduce((total, article) => total + article.content.length, 0);
  const totalComments = articles.reduce((total, article) => total + article.comments.length, 0);

  return (
    <div className='statsTable'>
      <h3>Статистика</h3>
      <table>
        <thead>
          <tr>
            <th>Количество статей</th>
            <th>Общее количество символов</th>
            <th>Количество комментариев</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalArticles}</td>
            <td>{totalChars}</td>
            <td>{totalComments}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
