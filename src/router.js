const express=require('express');
const router=express.Router();
const query=require('./db.js');

router.get('/',async(req,res)=>{
    try{
    const rows= await query('SELECT * FROM tareas');
    if(rows &&rows.length!==0) return res.json(rows).status(200);
    return res.json({err:"without tasks"}).status(200);
    }catch(err){return res.json({err:"Error to get tasks"}).status(400);}
})

router.get('/:id',async(req,res)=>{
    try{
    const {id}=req.params;
    const rows=await query('SELECT * FROM tareas WHERE id=?',[id]);
    if(rows && rows.length!==0)return res.json(rows).status(200);
    return res.json({status:"task not found"}).status(400);
    }catch(err){res.json({status:'Error to get'}).status(400);}
})

router.post('/',async(req,res)=>{
    try{
    const {task,description}=req.body;
    const rows=await query('INSERT INTO tareas (nombre_tarea,descripcion_tarea) VALUES (?,?)',[task,description]);
    if(rows && rows.affectedRows!==0) return res.json({message:"task added"}).status(200);
    return res.json({err:"It cant added"}).status(400);
    }catch(err){return res.json({err:"Error to add"}).status(400);}
})

router.put('/:id',async(req,res)=>{
    try{
    const {id}=req.params;
    const {task,description}=req.body;
    const rows=await query('UPDATE tareas SET nombre_tarea=? ,descripcion_tarea=? WHERE id=?',[task,description,id]);
    if(rows && rows.affectedRows!==0)return res.json({message:"updated"}).status(200);
    return res.json({err:"It cant be update"}).status(400);   
    }catch(err){return res.json({err:"Error to update"}).status(400); }
})

router.delete('/:id',async(req,res)=>{
    try{
    const {id}=req.params;
    const rows=await query('DELETE FROM tareas WHERE id=?',[id]);
    if(rows && rows.affectedRows!==0)return res.json({message:"task deleted"}).status(200);
    return res.json({err:"error to delet task"}).status(400);
    }catch(err){}
})

module.exports=router;