import {useState} from "react"
import Swal from "sweetalert2"

function Formulario ({addTodo}){
    const [todo, setTodo] = useState({ //Complex useState with an object
        title: 'Todo #01',
        description: 'Description #01',
        state: 'pending',
        priority: true

    })
    const {title, description, state, priority} = todo
   

    function handleSubmit (e) {  
        e.preventDefault()  //prevent default behaviour
    
        if(!title.trim() || !description.trim()){ // prevent the user enter empy spaces
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Todo and description required",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              return
        }
        
        console.log(todo)

        addTodo({
            id: Date.now(),
            ...todo,
            state: state === 'completed'
        })

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
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
                placeholder="Add Todo" 
                className="form-control mb-2"
                name="title"
                value={title}
                onChange={handleChange} //spread operator and setting the value with e.target.value
            />
            <textarea 
                className="form-control mb-2" 
                placeholder="Add description"
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
            <label htmlFor="inputCheck">Give priority</label>
            </div>
            <select 
                className="form-select mb-2" 
                name="state"
                value={state}
                onChange={handleChange}
            >
                    <option value="pendiente">Pending</option>
                    <option value="completado">Completed</option>
            </select>
            <button className="btn btn-primary" type="Submit">Add To do</button>
        </form>
    )
}


export default Formulario