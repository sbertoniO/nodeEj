const { Router } = require('express');
const route = Router();

route.get('/', (req, res) => {
    res.json({ "Titulo": "Hello" });
});

module.exports = route;