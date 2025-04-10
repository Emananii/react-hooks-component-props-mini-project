import React from 'react';

function Article({ title, date, preview }) {
  return (
    <article>
      <h2>{title}</h2>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
