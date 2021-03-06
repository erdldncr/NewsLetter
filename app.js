//jshint esversion: 6
const express=require('express');
const request=require('request')
const bodyParser=require('body-parser')

const app=express()

//to get static folders like css and images..
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/signup.html')
  
})



app.listen(3000,function(){
    console.log('server is running on port 3000.')
})