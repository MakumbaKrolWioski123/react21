import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'
import Todo from './components/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button/>
    <Card/>
    <Todo/>
  </StrictMode>,
)
