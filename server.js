
const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";
express=require('express');
eobj=express();
port=5555;
eobj.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept");

    next();
});
const client = new MongoClient(URL);
function starter()
{
    console.log("I can here"+port);
}
eobj.listen(port,starter);
function root(req,res)
{
    res.send("Omkar works....");
}
eobj.get('/',root);
async function sender(req,res)
{
    let data = await GetConnection();
    data = await data.find().toArray();
    res.send(data);
}
eobj.get('/batches',sender);

//////////////////////////////////////////////////////
//  GetConnection
//  It is used to connect node + express serever to mongodb
//////////////////////////////////////////////////////
async function GetConnection()
{
    let result = await client.connect();
    let db = result.db("Student");
    return db.collection("info");
}


//////////////////////////////////////////////////////
//  ReadData
//  It is used to read the data
//////////////////////////////////////////////////////
async function ReadData()
{
    let data = await GetConnection();
    data = await data.find().toArray();
    console.log("Data from tha Student Database is : ");
    console.log(data);
}
async function DeleteData()
{
    let data = await GetConnection();
    let result=await data.deleteOne({"Name":"Parth Kulat"});
    if(result.acknowledged)
    {
        console.log("data deleted successfully");
    }
}
async function InsertData()
{
    let data = await GetConnection();
    let result=await data.insertOne({"Name":"Parth Kulat","Age":19,"Department":"Computer"});
    if(result.acknowledged)
    {
        console.log("data inserted");
    }
}
async function UpdateData()
{
    let data = await GetConnection();
    let result=await data.updateOne({"Name":"Omkar Warule"},{$set:{"Age":19}});
    if(result.acknowledged)
    {
        console.log("data inserted");
    }
}

//////////////////////////////////////////////////////
//  main
//  Entry point function
//////////////////////////////////////////////////////
function main()
{
    let ret;
    ret = GetConnection();
    console.log("Database connected");
    DeleteData();
    ReadData();
    
    
}
main();