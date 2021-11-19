const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.use("/", require("./routes/route"));

mongoose
  .connect(
    "mongodb+srv://Vicky:Vinayaka@cluster0.j480f.mongodb.net/GreddyGame?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
