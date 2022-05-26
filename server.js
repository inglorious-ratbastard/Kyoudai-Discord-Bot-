const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, process.env.SAVEDIR)));

app.get('/', (req, res) => {
    res.send('Discord Admin Services')
});

app.get('/combo', (req, res) => {
    res.sendFile('combo.html', {root: __dirname })
});

app.get('/caption', (req, res) => {
    res.sendFile('caption.html', {root: __dirname })
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
