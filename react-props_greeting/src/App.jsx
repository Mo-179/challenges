import "./App.css";

export default function App() {
  return (
    <h1>
      <Greeting name={"user"} />
    </h1>
  );
}

function Greeting(props) {
  return <div>Hello {props.name}</div>;
}
