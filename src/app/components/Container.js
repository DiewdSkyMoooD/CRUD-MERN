import React from 'react';
import Form from './Form';
import Table from './Table';

function Container({db,createData,deleteData,editData,toEdit,setToEdit}){
    return(
        <div className="container pt-5">
            <div className="row">
                <Form createData={createData} editData={editData} toEdit={toEdit} />
                <Table db={db} deleteData={deleteData} setToEdit={setToEdit}/>
            </div>
        </div>
    );
}

export default Container;