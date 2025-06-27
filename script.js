const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

// Array 
const posts = [
    {
        titolo: "Il mio primo post",
        contenuto: "Questo è il contenuto del primo post",
        immagine: "/img/ciambellone.jpeg",
        tags: ["inizio", "blog"]
    },
    {
        titolo: "Secondo post",
        contenuto: "Un altro giorno, un altro post",
        immagine: "/img/pic2.jpg",
        tags: ["vita", "giornata"]
    },
    {
        titolo: "Post tecnico",
        contenuto: "Oggi ho imparato a usare Express",
        immagine: "/images/pic3.jpg",
        tags: ["express", "node"]
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
