// Starter component for displaying individual todo items
// TODO: Implement edit and delete functionality

export default function TodoItem({ todo, onTodoUpdated, onTodoDeleted }) {
  const handleDelete = () => {
    // TODO: Implement delete logic
    onTodoDeleted(todo._id);
  };

  const handleToggle = () => {
    // TODO: Implement toggle complete logic
  };

  return (
    <div>
      <input type="checkbox" onChange={handleToggle} />
      <span>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
