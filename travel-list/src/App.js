import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Stats from "./Stats";
import List from "./List";

function App() {
  const [items, setItems] = useState([]);

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleButton = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div>
      <Header />
      <Form setItems={setItems} />
      <List
        items={items}
        handleDelete={handleDelete}
        handleToggleButton={handleToggleButton}
      />
      <Stats />
    </div>
  );
}

export default App;
