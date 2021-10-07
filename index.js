const express = require('express')
const app = express()
const port = process.env.Port || 3000

// set engine to ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index.ejs')
});

app.get('/contact', (req, res) => {
    res.render('pages/contact.ejs')
});

app.listen(port, () => {
    console.log(`listening at localhost:${port}`)
})