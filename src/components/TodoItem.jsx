export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <button
        type="button"
        className={`todo-toggle ${todo.completed ? 'completed' : ''}`}
        onClick={() => onToggle(todo.id)}
        aria-label={
          todo.completed
            ? `Mark ${todo.text} as active`
            : `Mark ${todo.text} as completed`
        }
      >
        {todo.completed ? '✓' : ''}
      </button>
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button
        type="button"
        className="todo-delete"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        ×
      </button>
    </li>
  )
}
