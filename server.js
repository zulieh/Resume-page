const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());


// Dev logging middleware
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
  });

app.use('/', (req, res) => {
  res.send('Welcome to code evaluation api');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server is running at port ${PORT}`));

