const express = require('express');
const app = express();
const port = 3000


app.get('/', (req, res) => {
    res.send('il mio blog');
});


app.listen(3000, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});
