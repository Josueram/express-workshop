const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res, next) => {
    res.status(200);
    res.send('Bienvenido al servidor');
});

app.get('/:name', (req, res, next) => {
    name = req.params.name;
    res.status(300);
    res.send('Hola ' + name)
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...')
});