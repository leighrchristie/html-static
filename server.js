const express = require('express')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express()

const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

//app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname,'index.html'))
//})

app.use(express.static('public'))
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')


app.get('/date',(req, res) => {
    res.render('date', {date: new Date()})
})

app.listen(3000, () => {
    console.log("Web server is running")
})