import React from 'react';

function NewsCard({ article }) {
  return (
    <div >
      <h2 c>{article.title}</h2>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>Authors: {article.author}</p>
      <p>Date: {article.publishedAt}</p>
      <p>Description: {article.description}</p>
      <p>Content: {article.content}</p>
    </div>
  );
}

export default NewsCard;
