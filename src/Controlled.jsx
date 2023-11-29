import {useState} from "react"

function Controlled (){

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: 'pendiente'

    })
   

    function handleSubmit (e) {  
        e.preventDefault()  //prevent default behaviour
        console.log(todo)
    }

    return(
        //call function handleSubmit on Submit. 
        <form onSubmit={handleSubmit}>  
            <input 
                type='text' 
                placeholder="Ingrese Todo" 
                className="form-control mb-2"
                name="title"
                value={todo.title}
                onChange={(e)=> setTodo({...todo, title: e.target.value})}
            />
            <textarea 
                className="form-control mb-2" 
                placeholder="ingrese descripcion"
                name="description"
                value={todo.description}
                onChange={(e)=> setTodo({...todo, description: e.target.value})}
            />
            <select 
                className="form-select mb-2" 
                name="state"
                value={todo.state}
                onChange={(e)=> setTodo({...todo, state: e.target.value})}
            >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
            </select>
            <button className="btn btn-primary" type="Submit">Procesar</button>

        </form>
    )
}


export default Controlled