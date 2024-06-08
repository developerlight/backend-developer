const Express = require('express');
const connDb = require('./config/connDb');
const app = Express();

const mhsRouter = require('./routes/mhsRoute');

app.use(Express.json());
app.use(Express.urlencoded({extended: true}));

connDb();

app.use('/mhs', mhsRouter);

app.listen(5000, ()=> {
    console.log('Server running on http://localhost:5000');
})