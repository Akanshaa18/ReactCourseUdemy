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
const List = ({ items, handleDelete, handleToggleButton }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            handleDelete={handleDelete}
            handleToggleButton={handleToggleButton}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
