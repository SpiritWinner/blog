import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../features/articles/articlesSlice';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import './AddArticle.scss';

const AddArticle: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleAddArticle = () => {
    if (title.trim() && description.trim() && content.trim() && image.trim()) {
      const newArticle = {
        id: Date.now(),
        title,
        description,
        content,
        comments: [],
        image 
      };
      dispatch(addArticle(newArticle));
      navigate('/');
    }
  };

  return (
    <Layout onSearch={() => {}}>
    <div className="addArticle">
      <h1>Добавить новую статью</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок"
        />
      </div>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Краткое описание"
        />
      </div>
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Полный текст"
          rows={8}
        />
      </div>
      <div>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="URL изображения"
        />
      </div>
      <button onClick={handleAddArticle}>Добавить статью</button>
    </div>
    </Layout>
  );
};

export default AddArticle;
