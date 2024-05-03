import "./App.css";

export default function App() {
  return ArticleComponent();
}

function ArticleComponent() {
  return (
    <article className="article">
      <h2 className="article__title">some title</h2>
      <label htmlFor="input">Lable</label>
      <input id="input"></input>
      <a className="article_link" href="https://de.wikipedia.org/wiki/Pizza">
        hungry?{" "}
      </a>
    </article>
  );
}
