const express = require('express')

const app = express()

const users = [
    {id: 1, user:'John', age: 15},
    {id: 2, user:'Jane', age: 29},
    {id: 3, user:'Bob', age: 19},
    {id: 4, user:'Bruce', age: 30},
    {id: 5, user:'Ron', age: 39}
]

app.get('/', (req, res, next) => {

    res.status(200).json(users)

}) 

app.get('/info', (req, res, next) => {
    res.send('Im MS2')
})

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('ms 1 running')
})