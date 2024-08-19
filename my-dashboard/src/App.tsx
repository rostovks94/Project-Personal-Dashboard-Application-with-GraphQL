import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfileView from './view/ProfileView';
import PostsView from './view/PostsView';
import AlbumsView from './view/AlbumsView';
import TodosView from './view/TodosView';
import PostDetails from './view/PostDetails';
import AlbumSearch from './components/AlbumSearch';
import TodoSearch from './components/TodoSearch';
import './App.css';
import './css/navbar.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div>
      <Router>
        <nav className="navbar">
          <Link to="/">Profile</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/albums">Albums</Link>
          <Link to="/todos">Todos</Link>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<ProfileView />} />
          <Route path="/posts" element={<PostsView />} />
          <Route path="/albums" element={<AlbumsView />} />
          <Route path="/todos" element={<TodosView />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
          <Route path="/albums/search" element={<AlbumSearch />} />
          <Route path="/todos/search" element={<TodoSearch />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;