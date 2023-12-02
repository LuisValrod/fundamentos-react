import { useRef, useState } from "react"

function Uncontrolled (){
    
    const form = useRef(null) // method to catch the info from a form
    const [error, setError] = useState("")
        //function to handle submit

    function handleSubmit (e) {  
        e.preventDefault()  //prevent default behaviour
        setError('') //clean possible error at start of the function

        const data = new FormData(form.current)  //FormData(form.current) catches the important info from the object form

        console.log([...data.entries()])  //display the entries (inputs) of data in an array
        const {title, description, state} = Object.fromEntries([...data.entries()]) //convert data.entries to an object, and desestructure
        ;

        //validate data
        if(!title.trim() || !description.trim() || !state.trim()){return setError( 'Fill in the required fields')}
        
        //send data
        console.log(title, description, state)
    
        
    }
    return(
        //call function handleSubmit on Submit. The ref indicates where the data will be stores, which is in form
        <form onSubmit={handleSubmit} ref={form}>  
            <input 
                type='text' 
                placeholder="Ingrese Todo" 
                className="form-control mb-2"
                name="title"
                defaultValue="todo #01"
            />
            <textarea 
                className="form-control mb-2" 
                placeholder="ingrese descripcion"
                name="description"
                defaultValue="description #01"
            />
            <select 
                className="form-select mb-2" 
                name="state"
                defaultValue= "completado"
            >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
            </select>
            <button className="btn btn-primary" type="Submit">Procesar</button>
            {
            error !== '' && error
            }
        </form>
    )
}

export default Uncontrolled

//this filed is just for practising purposes