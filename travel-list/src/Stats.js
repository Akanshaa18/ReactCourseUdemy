const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You are ready to go, Safe journey!"
          : `You have ${numItems} items and you have packed ${numPacked}(${packedPercent}%)`}
      </em>
    </footer>
  );
};

export default Stats;
