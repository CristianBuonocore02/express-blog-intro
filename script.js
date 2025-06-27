const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

// Array 
const posts = [
    {
        titolo: 1,
        contenuto: "ciambellone",
        immagine: "/img/ciambellone.jpeg",

    },
    {
        titolo: 2,
        contenuto: "panefritto",
        immagine: "/img/panefritto_dolce.jpg",

    },
    {
        titolo: 3,
        contenuto: "cracker",
        immagine: "/img/cracker_barbabietola.jpeg",

    },
    {
        titolo: 4,
        contenuto: "pasta con barbabietole",
        immagine: "/img/pasta_barbabietola.jpeg",

    },
    {
        titolo: 5,
        contenuto: "Oggi ho imparato a usare Express",
        immagine: "/img/torta_paesana.jpeg",

    }
];

// Rotta principale "/"
app.get('/', (req, res) => {
    res.send('il mio blog');
});

// Rotta API "/api/posts"
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Avvio del server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});
