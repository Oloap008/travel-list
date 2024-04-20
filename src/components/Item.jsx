function Item({ item, onRemoveItem, onTogglePacked }) {
  const { description, quantity, packed, id } = item;
  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onTogglePacked(id)}
      />
      <span className={packed ? "packed" : ""}>
        {quantity} {description}
      </span>
      <button onClick={() => onRemoveItem(id)}>❌</button>
    </li>
  );
}

export default Item;
