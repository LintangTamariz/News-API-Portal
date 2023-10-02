import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../component/Newscard';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const apiKey = '43c431e4156e4008859577b467ae7620';
    const apiUrl = 'https://newsapi.org/v2/top-headlines';
    const params = {
      country: 'us',
      apiKey: apiKey,
    };

    axios
      .get(apiUrl, { params })
      .then((response) => {
        const articlesData = response.data.articles;
        setArticles(articlesData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleShowDetail = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      {selectedArticle ? (
        <div>
          <button 
          className='bg-blue-500 p-2 my-3'
           onClick={handleBackToList}>Back to List</button>
          <NewsCard article={selectedArticle} />
        </div>
      ) : (
        <div className=''>
          <h1 className='font-bold text-3xl my-10'>News Articles</h1>
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                <h2 className='font-semibold text-2xl'>{article.title}</h2>
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                <p>Authors: {article.author}</p>
                <p>Date: {article.publishedAt}</p>
                <button onClick={() => handleShowDetail(article)}>Detail</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
