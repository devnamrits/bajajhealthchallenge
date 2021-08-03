const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const logicRoute = require('./Routes/logic');

app.use(express.json({ extended: false }))

app.use(logicRoute)

app.use('/', (req, res) => {
    res.send('Please open the end point. The request should be: { "numbers": [2, 3,...]');
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})