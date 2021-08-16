import React from 'react';
import TableRow from './TableRow'

function Table({db,deleteData,editData,setToEdit}){
    return(
        <div className="col-lg-8 col-md-8 col-sm-12 padding">
                <table className="table table-dark table-borderless">
                    <thead>
                        <tr>
                            <th>Tarea</th>
                            <th>Descripcion</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>

                    {db.length===0
                    ?<tr><td colSpan="3">Sin datos...</td></tr>
                    :db.map((elemento)=> <TableRow key={elemento.id} elemento={elemento} setToEdit={setToEdit} deleteData={deleteData}/>)}
                        
                    </tbody>
                </table>
            </div>
    );
}

export default Table;