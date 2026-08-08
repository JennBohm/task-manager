export default function TodoFilters({ filter, setFilter }) {
  return (
    <div className="todo-filters" role="group" aria-label="Todo filters">
      <button
        type="button"
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        type="button"
        className={filter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        type="button"
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  )
}
