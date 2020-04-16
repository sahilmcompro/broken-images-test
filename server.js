const express = require('express');
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
});

app.get('/:filename', (req, res) => {
    res.sendFile(req.params.filename, {root: __dirname});
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))