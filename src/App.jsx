import { useEffect, useMemo, useState } from 'react'
import TodoFilters from './components/TodoFilters.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = window.localStorage.getItem('task-manager-todos')
    return saved ? JSON.parse(saved) : []
  })
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    window.localStorage.setItem('task-manager-todos', JSON.stringify(todos))
  }, [todos])

  const handleAddTodo = (event) => {
    event.preventDefault()
    const trimmed = newTodo.trim()
    if (!trimmed) return

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        text: trimmed,
        completed: false,
      },
    ])
    setNewTodo('')
  }

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed))
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((todo) => !todo.completed)
    if (filter === 'completed') return todos.filter((todo) => todo.completed)
    return todos
  }, [filter, todos])

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Todo List</h1>
        <p>Keep track of your tasks with React Hooks.</p>
      </header>

      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} onAddTodo={handleAddTodo} />

      <section className="todo-panel">
        <div className="todo-meta">
          <span>{activeCount} active</span>
          <span>{completedCount} completed</span>
        </div>

        <TodoFilters filter={filter} setFilter={setFilter} />

        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </section>

      {completedCount > 0 && (
        <div className="todo-footer">
          <button type="button" className="clear-button" onClick={clearCompleted}>
            Clear completed
          </button>
        </div>
      )}
    </div>
  )
}

export default App
