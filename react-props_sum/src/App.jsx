import "./App.css";

export default function App() {
  return (
    <h1>
      <Sum valueA={2} valueB={3} />
    </h1>
  );
}

function Sum({ valueA, valueB }) {
  return <div>{valueA + valueB}</div>;
}
