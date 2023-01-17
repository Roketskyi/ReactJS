const express = require('express');
const routes = require ('./routes/routes');

const IP = 'localhost';
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/api', routes);

app.post("/", (req, res) => {
    res.status(200).json('good')
})

app.listen(PORT, () => console.log(`Server started on http://${IP}:${PORT}/`));
