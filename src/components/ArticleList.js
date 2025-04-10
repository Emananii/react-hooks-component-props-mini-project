import Article from './Article';

function ArticleList({ posts }) {
  const articles = posts.map(({ id, title, date, preview }) => (
    <Article
      key={id}
      title={title}
      date={date}
      preview={preview}
    />
  ));

  return (
    <main>
      {articles}
    </main>
  );
}

export default ArticleList;
