const express = require('express')

const path = require('path')

const app = express();

//basic routing
app.get('/', (req,res)=>{
    res.sendFile(path.join (__dirname, 'public', 'home.html'))
})

app.get('/about', (req,res)=>{
    res.send('about us page')
})

app.get('/services', (req,res)=>{
    res.send('Our services')
})

app.get('/contactUs', (req,res)=>{
    res.send('Chat with us')
})

//create a htmlfile services
//create a htmlfile contactUs

app.listen(8000, ()=> console.log(`Server is running on port 8000`))

