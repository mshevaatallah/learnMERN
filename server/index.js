const express = require("express");
const app = express();
const mongose = require("mongoose");
const UserModel = require("./models/User");
const cors = require("cors");
mongose.connect(
  "mongodb+srv://userdatabase:User123@cluster0.mrgrq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
app.use(express.json());
app.use(cors());
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, ress) => {
    if (err) {
      res.json(err);
    } else {
      res.json(ress);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const NewUser = req.body;
  const user = new UserModel(NewUser);
  await user.save();
  res.json(NewUser);
});

app.listen(3001, () => {
  console.log("Server is Running !");
});
