import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: " apple",
      color: "green",
    },
    {
      id: 1339,
      name: " orange",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <Card key={fruit.id} name={fruit.name} color={fruit.color} />
        </div>
      ))}
    </div>
  );
}
