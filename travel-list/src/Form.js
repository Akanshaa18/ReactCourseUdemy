import { useState } from "react";
const Form = ({ setItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const addItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    addItems(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack for your trip?</h3> 
      <input
        style={{ border: "solid" }}
        type="text"
        placeholder="No. of Items"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      ></input>
      <input
        style={{ border: "solid" }}
        type="text"
        placeholder="Items ... "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button style={{ border: "solid" }}>Add</button>
    </form>
  );
};

export default Form;
