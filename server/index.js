const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT ||3001;
const app = express();
const Login = require("./routes/login");
const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());
app.use("/auth", Login);
try {
  mongoose.connect(
    "mongodb+srv://siddharthkumar28717:ajw065123@cluster0.5svwbtr.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("connect to db");
} catch (err) {
  console.log(error);
}
app.listen(PORT, () => {
  console.log("server");
});
