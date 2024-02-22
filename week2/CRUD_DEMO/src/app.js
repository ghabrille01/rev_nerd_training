const express = require('express');
const app = express();
const itemRouter = require('./contoller/ItemRouter');

app.use(express.json());

app.use((req, res, next) => {
    logger.info(`Incoming ${req.method} : ${req.url}`)
})

const { logger } = require('./util/logger');

const PORT = 3000;

app.use('/items', itemRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})