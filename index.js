const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.btmhcwa.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const studentCollection = client.db('stu_info').collection('students');
    }
    finally{

    }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('Server side is running');
});

app.listen(port,()=>{
    console.log('Listening from port', port);
});