import express from 'express';
import bodyParser from 'body-parser';
import path, { dirname } from 'path';
import studentRoute from './routes/studentRoutes';
import serveStatic from 'serve-static';

const app=express();
const PORT =5005;


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public')));
app.use('/students',studentRoute);

app.listen(PORT,()=>{
     console.log(`✅ Server listening on http://localhost:${PORT}`);
});