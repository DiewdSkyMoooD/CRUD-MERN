require('dotenv').config();
const mysql=require('mysql');
const pool=mysql.createPool({
    host:process.env.HOST,
    user:process.env.USERDB,
    database:process.env.DATABASE,
    password:process.env.PASSWORD
})

function query(sql,values){
    return(new Promise ((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err)reject(err);
            connection.query(sql,values,(err,rows)=>{
                if(err)reject(err);
                resolve(rows);
                connection.release();
            })
        })
    }));
}

module.exports=query;