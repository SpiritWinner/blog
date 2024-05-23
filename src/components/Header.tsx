import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.scss';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="logo">
      <Link to="/" className="logoLink">
          <h1>Блог</h1>
        </Link>
      </div>
      <div className="searchBar">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="addArticleLink">
        <Link to="/add-article">Добавить новую статью</Link>
      </div>
    </header>
  );
};

export default Header;
