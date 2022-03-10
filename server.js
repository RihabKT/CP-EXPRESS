const express = require('express')

const app = express()

const date = new Date();
const day = date.getDay();
// console.log(day)
const hour = date.getHours();
// console.log(hour)

function Logger(req,res,next) {
    if((0 < day && day < 6) && (9 < hour && hour < 17)){
        next();
    }
    else{
        res.send("OUUUUUUUPS...THERE'S NO WORK TODAY!")
    }
}

app.use(Logger);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/public/home.html")
//     res.sendFile(__dirname + "/public/service.html")

//     res.sendFile(__dirname + "/public/contact.html")
// })

app.use(express.static(__dirname + "/public"));






const port = process.env.PORT || 5000
app.listen(port, err => {
    err ? console.log(err) : console.log(` The server is running on ${port} `)
})