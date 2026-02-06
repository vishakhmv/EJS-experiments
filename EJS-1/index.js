import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  let dayt;
  let adv;

  if (day === 0 || day === 6) {
    dayt = "weekend";
    adv = "have fun";
  } else {
    dayt = "weekday";
    adv = "work hard";
  }

  res.render("index.ejs", { daytype: dayt, advice: adv });
});

app.listen(port, () => {
  console.log(`port ${port} is listening`);
});
