const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

app.get('/', (req, res) => {
    res.send('Hello, noteshare!');
});

app.listen(PORT, () => {
    console.log(`noteshare is running on http://${HOST}:${PORT}`);
});
