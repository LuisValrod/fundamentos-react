import { useRef } from "react"

function NoControlado (){
    
    const form = useRef(null)

    function handleSubmit (e) {
        e.preventDefault()

        const data = new FormData(form.current)

        console.log([...data.entries()])
        const {title, description, state} = Object.fromEntries([...data.entries()])
        console.log(title, description, state);

    
        
    }
    return(
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

        </form>
    )
}

export default NoControlado