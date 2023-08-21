const express = require('express');

const app = express();

const PORT = 8080

app.get('/', (req, res) => {
    res.send("HELLO WORLD");
});

app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`);
});