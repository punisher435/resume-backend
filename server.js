import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';
import { ExpressPeerServer } from "peer";
import http from 'http';


dotenv.config()

//App config
const app = express();
const port = process.env.PORT || 8001

const server = http.createServer(app);

const customGenerationFunction = () =>
  (Math.random().toString(36) + "0000000000000000000").substr(2, 16);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/",
  generateClientId: customGenerationFunction,
});

app.use("/mypeer", peerServer);








//peer


/* app.use("/mypeer",peerServer); */


//Middlewares
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
//DB Config

if(process.env.MONGO_DB_URL)
{
    const connectdb = async () => {
        await mongoose.connect(`${process.env.MONGO_DB_URL}`,
        {useUnifiedTopology: true,useCreateIndex:true}).
        then(() => console.log('Connected')).
        catch(err => console.log('Caught', err.stack));
        
    }
    
    connectdb();
  
}









//API Endpoints
app.get('/',(req,res) => res.status(200).send(`hello`))










//Listener
server.listen(port,() => {console.log(`listening on localhost ${port}`)});









