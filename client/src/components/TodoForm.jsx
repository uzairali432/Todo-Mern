// Starter form component for creating todos
// TODO: Connect to API and implement form submission

export default function TodoForm({ onTodoAdded }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement todo creation
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Todo</h2>
      <input type="text" placeholder="Enter todo title" required />
      <button type="submit">Add Todo</button>
    </form>
  );
}
