const express = require("express");
const dotenv = require("dotenv");
const emailHandler = require("./util/emailHandler.js")

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("src"));


app.route("/").get(function(req, res) {
  res.sendFile(process.cwd() + "/src/index.html");
});

app.route("/sendmail").post(function(req, res){
  const { name, email, subject, message } = req.body;
  
  let detail = subject+" from "+name
  emailHandler(email, detail, message, message).catch(err => console.log(err))  
  res.redirect("/success")
});

app.route("/success").get(function(req, res) {
  res.send("Message Recieved!!");
});

app.use("/", (req, res) => {
  res.send("Welcome to resume app");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server is running at port ${PORT}`));
