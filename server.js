require('dotenv').config();
const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const connectToDb = require('./Config/');

const PORT = process.env.PORT;

connectToDb().then(() => {
    server.listen(PORT, () => {
        console.log(process.env.PORT)
        console.log("server connected to db and running...")
    });
}).catch((err) => {
    console.log(err)
})
