const express = require("express");
const postRoute = require("./routes/postRoute");
const userRoute = require("./routes/userRoute");
require("dotenv").config();
require("./models/index");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
const Port = process.env.PORT || 8001;

app.use("/post", postRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`);
});

// const express = require('express');

// const app = express();
// app.use(express.json())

// const Port = process.env.PORT || 6001 ;
// console.log('--------------------------------------------------------------------------------------------------')

// app.get('/',(req,res)=>{
//     res.send("first")
// console.log("-----------start")
// })

// app.listen(Port, ()=>{
//     console.log(`App is run on this ${Port} Port.`)
// })
