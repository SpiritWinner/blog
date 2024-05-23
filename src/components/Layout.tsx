import React from 'react';
import Header from './Header';
import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
  onSearch: (query: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onSearch }) => {
  return (
    <div className="layout">
      <Header onSearch={onSearch} />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
