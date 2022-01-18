const express = require('express');
const connectDB = require('./config/db');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

connectDB();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));