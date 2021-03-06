//jshint esversion: 6
const express=require('express');
const request=require('request')
const bodyParser=require('body-parser')

const app=express()

//to get static folders like css and images..
app.use(express.static('public'))

///to get values from html file when submitted
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/signup.html')
  
})
app.post('/',function(req,res){

})


app.listen(3000,function(){
    console.log('server is running on port 3000.')
})