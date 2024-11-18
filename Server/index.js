import express from "express";

const app =express();

const PORT=8080;


//to make the server response any incoming requests
app.listen(PORT, () =>{
    console.log("server started at port " + PORT);
});

//array of objects
const names=[
    {
        id:1,
        name:"Ramesh",

    },
    {
        id:2,
        name:"Suresh",
    },
];

app.get("/names",(req,res)=>{
    res.send(names);
});

app.post("/add",(req,res)=>{
    const newName= req.body();
    const dataToAdd=new names(newName);
    dataToAdd.save();
    res.send(names);
});

app.delete("/delete/:id",(req,res)=>{
    const idToDelete=req.params.id;
    names.findByIdAndDelete({idToDelete});
    res.send(names);
});