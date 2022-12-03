const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

import data from './data/data.json'
app.use(bodyParser.json());

// CORS Middleware
app.use(function (req, res, next) {
    // Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

// GET Route at Root '/' that returns a Test Text message
app.get('/', function (_req, res)
{
    // Return Test Text
    console.log('In GET / Route');
    res.send('This is the default root Route.');
})
// GET Route at '/users' that returns Users List
app.get('/users', function (_req, res)
{
    // Return Users List as JSON
    console.log('In GET /users Route');
    res.json(data);
})
// GET Route at '/users/:id' that returns a User from the Users List
app.get('/users/:id', function (req, res)
{
    // Get the User
    console.log('In GET /users Route with ID of ' + req.params.id);
    let userId = Number(req.params.id);
 
    // Return an error if invalid User ID or return a User as JSON
    if(userId >= data.length)
        res.status(200).json({"error" : "Invalid User ID"})
    else
        res.status(200).json(data[userId])
})


app.post('/users', function (req, res)
{
    console.log('In POST /users Route with Post of ' + JSON.stringify(req.body));
    if(!req.body.first_name)
    {
        res.status(400).json({error: "Invalid User Posted"});
    }
    else
    {
        var newId = data[data.length-1].id+1;
        var user = { id: newId, first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, gender: req.body.gender, ip_address: req.body.ip_address }
        data.push(user);
        res.status(200).json({error: "New User Added", location: "/users/" + (newId-1)});
     }
})

// Start the Server
app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}!`);
});
