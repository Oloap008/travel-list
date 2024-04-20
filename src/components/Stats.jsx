function Stats({ items }) {
  const itemsPacked = items.reduce(
    (acc, item) => (item.packed ? acc + 1 : acc),
    0
  );
  const packedPercent = Math.round((itemsPacked / items.length) * 100);
  const allPacked = packedPercent === 100;

  return (
    <footer className="stats">
      <em>
        {!items.length
          ? "Start adding some items to your packing list"
          : allPacked
          ? "You got everything! Ready to go "
          : ` Your have ${items.length} items on your list, and you already packed ${itemsPacked} (${packedPercent}%)`}
      </em>
    </footer>
  );
}

export default Stats;
