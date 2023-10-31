const express = require('express');
const connectDb = require("./utilServer/db");
const app = express();

const port = 3000; 

app.use(express.json());



connectDb().then(() => {
    app.listen(port, err => {
        if (err) throw err;
        console.log(`Express server  running ${port}`);
        app.use('/', require('./routes/crud'))

    });
});