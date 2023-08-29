const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("<h1> 99 bottles of perfume on the wall</h1> <br> <a href='/98'>Take one down, pass it around</a>")
}) 



app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles > 0) {
        res.send(`${req.params.number_of_bottles} bottles of perfume on the wall <br> <a href='/${req.params.number_of_bottles-1}'>take on down, pass it around</a>`)
    }
    else {
       res.send("<h1> 0 bottles of perfume on the wall</h1> <br> <a href='/99'>Take one down, pass it around</a>") 
    }
});




app.listen(PORT, () => {
    console.log(`Gettin busy with it on ${PORT}`)
});





