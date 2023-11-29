import { useRef } from "react"

function NoControlado (){
    
    const form = useRef(null)

    function handleSubmit (e) {
        e.preventDefault()
        console.log('me diste click')
        console.log(form.current)
        
    }
    return(
        <form onSubmit={handleSubmit} ref={form}>
            <input 
                type='text' 
                placeholder="Ingrese Todo" 
                className="form-control mb-2"
                name="title"
            />
            <textarea 
                className="form-control mb-2" 
                placeholder="ingrese descripcion"
                name="description"
            />
            <select 
                className="form-select mb-2" 
                name="state"
                defaultValue= "completado"
            >
                    <option value="pendiente">Pendiente</option>
                    <option value="comletado">Completado</option>
            </select>
            <button className="btn btn-primary" type="Submit">Procesar</button>

        </form>
    )
}

export default NoControlado