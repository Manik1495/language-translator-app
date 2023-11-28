const fs = require('fs');
const app1Data = JSON.parse(fs.readFileSync('data/output-data-hin.json'));
const values = Object.values(app1Data);
console.log(values);