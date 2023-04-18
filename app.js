const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})


app.get('/about', (req, res)=>{ 
    const params = {}
    res.status(200).render('about.pug' , params);
});

app.get('/services', (req, res)=>{ 
    const params = {}
    res.status(200).render('services.pug' , params);
});

app.get('/contact', (req, res)=>{ 
    const params = {}
    res.status(200).render('contact.pug' , params);
});

app.post('/',(req,res)=>{
    console.log(req.body)
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite=`the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about the client ${more}.`
    fs.writeFileSync('output.txt',outputToWrite)
    const params ={'message' : 'Your form has been submitted successfully'}
    res.status(200).render('contact.pug',params)})





app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});