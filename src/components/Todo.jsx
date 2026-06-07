import { useState } from 'react'
import styles from './Todo/todo.module.css'

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Kup jajo', completed: false },
    { id: 2, text: 'Napisz zadanie', completed: true },
    { id: 3, text: 'Przeczytaj ksiazke', completed: true },
  ])

  const toggleTodo = (id) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const removeTodo = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id))
  }

  return (
    <section className={styles.todo}>
      <h2 className={styles.title}>Lista zadań</h2>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${styles.item} ${todo.completed ? styles.completed : ''}`.trim()}
          >
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
            </label>
            <button
              type="button"
              className={styles.remove}
              onClick={() => removeTodo(todo.id)}
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Todo
