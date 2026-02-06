import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let f=req.body["fName"];
  let s=req.body["lName"];
  let fc=f.length;
  let sc=s.length;
  let sum = fc+sc;
  res.render("index.ejs",{suml:sum});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
