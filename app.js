const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const logicRoute = require('./Routes/logic');

app.use(express.json({ extended: false }))

app.use(logicRoute)

app.use('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <center>
            <p>
                Please open the end point /bfhl. The POST request should be:
            </p>
            <strong>
                <p>
                    { "numbers": [2,3,....,n] }
                </p>
            </strong>
        </center>
    </body>
    
    </html>
    `);
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})