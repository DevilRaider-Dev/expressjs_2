const express = require('express')
const app = express()
const port = process.env.Port || 3000

// set engine to ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index.ejs', { nav: nav, url: req.url })
});

app.get('/contact', (req, res) => {
    res.render('pages/contact.ejs', { nav: nav, url: req.url, gallery: gallery })
});

app.listen(port, () => {
    console.log(`listening at localhost:${port}`)
})