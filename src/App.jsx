import { useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

const initialStateTodos = [
  {
  id: 1, 
  title: "Todo #01",
  description: "Description #01",
  state: true,
  priority: true  
},
  {
  id: 2, 
  title: "Todo #02",
  description: "Description #02",
  state: false,
  priority: false  
},
  {
  id: 3, 
  title: "Todo #03",
  description: "Description #03",
  state: false,
  priority: false  
},
]
function App() {
  
const [todos, setTodos] = useState(initialStateTodos)

const addTodo = todo => {
  setTodos([...todos, todo])
}

  return (
    <div className="container mb-2">
  <h1 className="my-5">Todo List</h1>
  <Formulario addTodo={addTodo} />
  <Todos todos={todos}/>
  </div>
  )
  }
    

export default App
