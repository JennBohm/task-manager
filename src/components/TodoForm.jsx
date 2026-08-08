export default function TodoForm({ newTodo, setNewTodo, onAddTodo }) {
  return (
    <form className="todo-form" onSubmit={onAddTodo}>
      <label htmlFor="new-task" className="sr-only">
        Add a new task
      </label>
      <input
        id="new-task"
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Enter a new todo"
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  )
}
