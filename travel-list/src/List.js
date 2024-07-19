import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

const Item = ({ item, handleDelete, handleToggleButton }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => handleToggleButton(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
};
const List = ({ items, handleDelete, handleToggleButton, handleClear }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            handleDelete={handleDelete}
            handleToggleButton={handleToggleButton}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          style={{ border: "solid" }}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button style={{ border: "solid" }} onClick={handleClear}>
          Clear List
        </button>
      </div>
    </div>
  );
};

export default List;
