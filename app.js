//jshint esversion: 6
const express=require('express');
const request=require('request')
const bodyParser=require('body-parser')
const https=require('https')

const app=express()

//to get static folders like css and images..
app.use(express.static('public'))

///to get values from html file when submitted
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/signup.html')
  
})
app.post('/',function(req,res){
 
    const firstname=req.body.fName;
    const lastname=req.body.lName;
    const email=req.body.email;
    
    var data={
        members:[
            {
            email_address:email,
            status:'subscribed',
            merge_fields:{
                FNAME:firstname,
                LNAME:lastname,
            }

        }
    ]
    };
    const jsonData= JSON.stringify(data)

    const url='https://us1.api.mailchimp.com/3.0/lists/e17cbc3a12'
    
    const options={
        method:"POST",
        auth:'erdldncr:a064cbab41673d573443bc0cf98eab05-us1'
    }

  const request=  https.request(url,options,(response)=>{
        if(response.statusCode===200){
            res.sendFile(__dirname+'/success.html')
        }else{
            res.sendFile(__dirname+'/failure.html')
        }
        response.on('data',(data)=>{
            console.log(JSON.parse(data))
        })


    })
    request.write(jsonData);
    request.end();

  

})


app.listen(3000,function(){
    console.log('server is running on port 3000.')
})

// a064cbab41673d573443bc0cf98eab05-us1

//list id
//e17cbc3a12