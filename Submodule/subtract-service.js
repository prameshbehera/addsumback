const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        const result = num1 - num2;
        res.json({ result });
    } else {
        res.status(400).json({ error: 'Invalid input. Both num1 and num2 must be numbers.' });
    }
});

app.listen(port, () => {
    console.log(`Subtraction Microservice is running on port ${port}`);
});
