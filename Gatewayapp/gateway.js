const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// Routes to microservices
app.use('/add', require('./Addmodule/add-service'));
app.use('/subtract', require('./Submodule/subtract-service'));

app.get('/hello', (req, res) => {
    res.json({ name: "hello" });
});

app.listen(port, () => {
    console.log(`Gateway is running on port ${port}`);
});
