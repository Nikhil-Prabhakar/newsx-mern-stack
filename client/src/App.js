// Import the ThemeSwitch component at the top
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Navbar from './components/nav';
import CardList from './components/cards';
import ApiService from './services/api';
import CommentBox from './components/CommentBox';
import NewsletterSubscription from './components/NewsletterSubscription';
import ThemeSwitch from './components/ThemeSwitch'; // Import ThemeSwitch

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [theme, setTheme] = useState('light'); // Add theme state

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await ApiService.fetchArticles(category);
      setArticles(response);
    };
    fetchArticles();
  }, [category]);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // You can implement logic to switch between light and dark themes here
    // You might want to update your CSS classes based on the selected theme
  };

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      {/* Include the ThemeSwitch component */}
      <ThemeSwitch onThemeChange={handleThemeChange} />
      <a href="./index.js"><Header title="NEWSX" /></a> 
      <Navbar onCategoryChange={handleCategoryChange} />
      <CardList articles={articles} />
      <div>
        <CommentBox /><br></br><br></br> 
        <NewsletterSubscription />
        <br></br><br></br> <br></br><br></br> <br></br><br></br> <br></br><br></br> 
      </div>
    </div>
  );
};

export default App;
