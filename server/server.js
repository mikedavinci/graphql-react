const express = require('express');
// import cors from 'cors';
// import { readdirSync } from 'fs';
// import csrf from 'csurf';
// import cookieParser from 'cookie-parser';
// const morgan = require('morgan');
const schema = require('./schema/schema.js');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
require('dotenv').config();

// const csrfProtection = csrf({ cookie: true });
// create express app
const app = express();

connectDB();

// apply middleware
// enable cors
// app.use(cors());
// app.use(express.json({ limit: '10mb' }));
// app.use(cookieParser());
// app.use(morgan('dev'));
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

// route
// readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));
// csrf
// app.use(csrfProtection);

// app.get('/api/csrf-token', (req, res) => {
//   res.json({
//     csrfToken: req.csrfToken(),
//   });
// });

// start server port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));
