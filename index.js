const csv = require('csv-parser');
const fs = require('fs');
const http = require('http');

const results = [];

fs.createReadStream('./Pokemon.csv')
    .pipe(csv())
    .on('data', (row) => {
        results.push(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });


const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/csv', (req, res) => {
    return results;
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));