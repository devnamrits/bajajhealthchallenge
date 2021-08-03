const express = require('express');
const app = express();

const PORT = 3000;

const logicRoute = require('./Routes/logic');

app.use(express.json({ extended: false }))

app.use(logicRoute)

app.use('/', (req, res) => {
    res.send('Redirected');
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})