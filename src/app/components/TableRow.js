import React from 'react';

function TableRow({elemento,deleteData,editData,setToEdit}){
    return(
        <tr>
            <td>{elemento.nombre_tarea}</td>
            <td>{elemento.descripcion_tarea}</td>
            <td>
                <button className="btn btn-secondary" onClick={()=>{setToEdit(elemento)}} >Editar</button>
                <button className="btn btn-secondary" onClick={()=>{deleteData(elemento.id)}} >Eliminar</button>
            </td>
        </tr>
    );
}

export default TableRow;