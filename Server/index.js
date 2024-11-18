import express from "express";

const app =express();

const PORT=8080;


//to make the server response any incoming requests
app.listen(PORT, () =>{
    console.log("server started at port " + PORT);
});