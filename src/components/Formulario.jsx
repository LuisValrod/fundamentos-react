import {useState} from "react"

function Formulario (){
    const [error, setError] = useState('')
    const [todo, setTodo] = useState({ //Complex useState with an object
        title: 'Todo #01',
        description: 'Description #01',
        state: 'pendiente',
        priority: true

    })
    const {title, description, state, priority} = todo
   

    function handleSubmit (e) {  
        e.preventDefault()  //prevent default behaviour
        setError('') // clean previous error if exist

        if(!title.trim() || !description.trim() || !state.trim()){ // prevent the user enter empy spaces
            return(setError('Fill in the required fields'))
        }
        
        console.log(todo)
        setTodo({...todo, title:'', description: ''}) // On submit, we clear fields

    }

    function handleChange(e){
        const {value, name, checked} = e.target
        console.log(value)
        //e => setTodo({...todo, priority: e.target.checked})
        setTodo({
            ...todo, 
            [name]: name === "priority" ? checked : value //[e.target.name]: e.target.type ==="checkbox" ? e.target.checked : e.target.value
        })
    }

    return(
        //call function handleSubmit on Submit. 
        <form onSubmit={handleSubmit}>  
            <input 
                type='text' 
                placeholder="Ingrese Todo" 
                className="form-control mb-2"
                name="title"
                value={title}
                onChange={handleChange} //spread operator and setting the value with e.target.value
            />
            <textarea 
                className="form-control mb-2" 
                placeholder="ingrese descripcion"
                name="description"
                value={description}
                onChange={handleChange}
            />
            <div className="form-check mb-2">
            <input 
                type="checkbox" 
                name="priority" 
                className="form-check-input" 
                id="inputCheck"
                checked={priority}
                onChange={handleChange}
                />
            <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select 
                className="form-select mb-2" 
                name="state"
                value={state}
                onChange={handleChange}
            >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
            </select>
            <button className="btn btn-primary" type="Submit">Procesar</button>
            {error !== '' && error}
 
        </form>
    )
}


export default Formulario