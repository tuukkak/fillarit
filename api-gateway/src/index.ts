import * as express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.json({});
});

app.use((req, res) => {
    res.status(404).json();
});

app.listen(port);

console.log(`Server listening on port ${port}`);
