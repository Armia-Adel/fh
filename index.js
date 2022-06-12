// Imports
const cors = require('cors');
const dotenv = require('dotenv'); 
const express = require('express');
const mongoose = require('mongoose');
const TodosRoute = require('./Routes/todos');


// Middlewares
dotenv.config();
const app = express();
app.use(cors({origin:"*"}));
app.use(express.json());
app.use('/todos', TodosRoute);


// Database Connect
mongoose.connect(process.env.MONGO_URL).then(() => console.log("connected to DB.")).catch( err => console.log(err));


// Server Port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}`);
});