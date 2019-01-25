require('dotenv').config()

const express = require("express");
const { json } = require("body-parser");
const massive = require('massive')

const app = express();
const PORT = process.env.PORT;
const pc = require('./controller')


app.use(json())

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        console.log('Database connected')
        app.set('db', dbInstance)
        })
    .catch(err => {
        console.log(err)
    })

app.get('/api/products', pc.getAll)
app.post('/api/products', pc.create)
app.delete('/api/products:id', pc.delete)
app.put('/api/products:id', pc.update)



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})