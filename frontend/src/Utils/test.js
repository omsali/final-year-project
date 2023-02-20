const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(`Hello from the server atharva`);
});
app.listen('5000',()=>{
    console.log("App is running at port 3000")
})
