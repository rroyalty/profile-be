import express from 'express';
const routes = require('./routes/index');
require('dotenv').config();
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
