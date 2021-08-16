import React,{useState,useEffect} from 'react'

const initialForm={
    id:null,
    task:"",
    description:"",
}

function Form({createData,editData,toEdit}){
    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        if(toEdit){setForm({
            id:toEdit.id,
            task:toEdit.nombre_tarea,
            description:toEdit.descripcion_tarea
        })
    return}
        setForm(initialForm)
    }, [toEdit])

    
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(form.id){
            editData(form);
            handelReset();
            return;
        }
        createData(form);
        handelReset();
    }

    const handelReset=(e)=>{
        setForm(initialForm);
    }

    return(
        <div className="col-lg-4 col-md-4 col-sm-12  padding">
               <div className="card p-3 text-white bg-dark ">
                    <form className="" id="formulario" onSubmit={handleSubmit} >
                        <div className="mb-3 input-group">
                        <input name="task" type="text" placeholder="Tarea" onChange={handleChange} value={form.task} />  
                        </div>
                        <div className="mb-3 input-group">
                        <input name="description" type="text" placeholder="Descripcion" onChange={handleChange} value={form.description}/>  
                        </div>
                        <button className="btn btn-primary" type="submit">Insertar</button>
                    </form>  
               </div>
            </div>
    );
}

export default Form;