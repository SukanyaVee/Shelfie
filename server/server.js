const express = require('express'); //Simulation-1 74C
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./controller')

// Simulation-1 70C
massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance);
}).catch(err=>console.error(err))

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
//Simulation-1 76C
const APIshelf = '/api/shelf'
app.get(`${APIurl}/:id`, ctrl.read) //same module exports object

const APIbin = '/api/bin'
app.get(`${APIurl}/:id`, ctrl.get) //Simulation-1 74D-1
app.put(`${APIurl}/:id`, ctrl.update)//Simulation-1 74D-2
app.post(`${APIurl}/:id`, ctrl.create)//Simulation-1 74D-3
app.delete(`${APIurl}/:id`, ctrl.delete)//Simulation-1 74D-4


app.listen (process.env.PORT, () => { console.log(`Server listening on port ${process.env.PORT}`); } )