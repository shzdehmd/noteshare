const express = require('express');
const njk = require('nunjucks');

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

njk.configure('views', {
    express: app,
    autoescape: true,
});
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(PORT, () => {
    console.log(`noteshare is running on http://${HOST}:${PORT}`);
});
