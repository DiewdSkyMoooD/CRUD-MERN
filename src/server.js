const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors');

app.set('port',process.env.PORT||3000);

app.use(cors({origin:'*',optionsSuccessStatus:200}))
app.use(express.static(path.join(__dirname+'/public')))
app.use(express.json())

app.use('/api', require('./router.js'))


app.listen(app.get('port'),()=>{
    console.log(`server in port ${app.get('port')}`)
})