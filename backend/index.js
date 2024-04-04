import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import path from "path"
// Music 

import multer from "multer"
import GridFsStorage from "multer-gridfs-storage"
import Grid from "gridfs-stream"
import methodOverride from "method-override"
import bodyParser from "body-parser"

// const express = require("express")
// const cors=require("cors")
// const mongoose =require("mongoose")

const app=express()


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//Music Middleware
app.use(bodyParser.json())
app.use(methodOverride("_method"))


// DataBase

mongoose.connect("mongodb://localhost:27017/Movies")
.then(()=>{
    console.log("MongoDB is connected");
})
.catch(()=>{
    console.log("Fail to connect");
})

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
})

const User=new mongoose.model("User",userSchema)

const moviesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    seat:{
        type:Number,
        required:true

    },
    time:{
        type:String,
        required:true
    }
})

const movies_collection=new mongoose.model("Movies_list",moviesSchema)




//Routes
app.post("/login",async (req,res)=>{

    const data={
        email:req.body.email,
        password:req.body.password
    }
//   ------------------------------

// movies_collection.insertMany([{"name":"abc","time":"12:00","seat":5}])

// ----------------------------
    
    const check=await User.findOne({email:data.email,password:data.password})
    
    if (check){
        console.log("Find data in LOGIN")
        res.json("Exist")
    }
    else{

        res.json("NotExist")

    }
    
})

app.post("/register", async (req,res)=>{


    const data={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }

    await User.insertMany([data])
    console.log("data is added to database")
    
})

// app.post("/search", async (req,res)=>{
//     const data={
//         name:req.body.name,
//     }
//     console.log(data.name)
//     if(data.name==''){
//         var check= await movies_collection.find({})
//     }
//     else{
//         var check= await movies_collection.find({name:data.name})

//     }
//     console.log(check)
//     res.send({statue:'ok',data:check})
    
// })

app.get("/all_movies",async (req,res)=>{
    let list_movies= await movies_collection.find({})
    res.send({status:"ok",data:list_movies})
   
})

app.post("/booking",async (req,res)=>{
    const ticket={
        name:req.body.name,
        time:req.body.time,
        seat:parseInt(req.body.seat)
    }
    const find_movies = await movies_collection.findOne({
        name: ticket.name,
        time: ticket.time,
        seat: { $gte: ticket.seat } 
      });
      

    
    
    
        if (find_movies) {
            const total_seat = find_movies.seat;
            console.log(total_seat);
    
            res.json("Yes");
            console.log("Movie is available");
    
            await movies_collection.updateOne(
                { name: ticket.name, time: ticket.time },
                { $set: { seat: total_seat - ticket.seat } }
            );
        } else {
            res.json('No');
            console.log("Out of stock");
        }
    }

)



// Port

app.listen(3000,()=>{
    console.log("Server Started at 3000")
})