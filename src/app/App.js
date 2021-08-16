import React,{useState,useEffect} from 'react';;
import Navbar from './components/Navbar';
import Container from './components/Container';
import {helpHttp} from './helpers/helphttp'

function App(){
    const api=helpHttp();
    const url='http://localhost:3000/api'
    const [db, setDb] = useState([])
    const [toEdit, setToEdit] = useState(null)
    useEffect(() => { 
        getData();
    }, [])

    const getData=()=>{
        api.get(url)
        .then(res=>setDb(res))
        .catch(err=>console.log(err))
    }  

    const createData=(data)=>{
        api.post(url,{body:data})
        .then(res=>{
            console.log(res);
            getData()
        })
        .catch(err=>console.log(err))
    }

    const editData=(data)=>{
        api.put(`${url}/${data.id}`,{body:data})
        .then(res=>{
            console.log(res)
            getData();
        })
        .catch(err=>console.log(err))
        setToEdit(null)
    }

    const deleteData=(id)=>{
        api.del(`${url}/${id}`)
        .then(res=>{
            console.log(res);
            getData()
        })
        .catch(err=>console.log(err))
    }


    return(
        <>
        <Navbar/>
        <Container db={db} createData={createData} deleteData={deleteData} editData={editData} toEdit={toEdit} setToEdit={setToEdit}/>
        </>
    );
}

export default App;