const express = require("express");

const app = express();

const database = {
  users: [
    {
      id: "123",
      name: "john",
      email: "john@email.com",
      password: "12345",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "124",
      name: "sally",
      email: "sally@email.com",
      password: "1234",
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.send("this is working");
});

app.post("/signin", (req, res) => {
  res.json("this is sign in");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

/*
/---> res = this is working 
/signin --> POST success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user

*/
