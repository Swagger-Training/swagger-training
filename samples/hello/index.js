const express = require('express');

const app = express();

app.get('/hello/:username', (req, res) => {
    res.setH
    //res.status(200).type('text').send(`Hello ${req.params['username']}`);
    res.status(200).json(`Hello ${req.params['username']}`);
})

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
