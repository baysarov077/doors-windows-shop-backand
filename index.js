const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.resolve(__dirname, "images")));
app.use(require("./routes/posts.route"));
app.use(require('./routes/users.route'))

const connected = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://baysarov077:Avenger95@cluster0.9anwb.mongodb.net/dooors?retryWrites=true&w=majority"
    );
    console.log("Вы успешно подключились к MongoDB!");
    app.listen(port, () => {
      console.log("Server has been started!");
    });
  } catch (e) {
    console.log(e);
  }
};

connected();
