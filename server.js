const express = require("express");
const app = new express();

const morgan = require("morgan");
app.use(morgan("dev"));

const api = require("./routes/route");

require("dotenv").config();
const PORT = process.env.PORT;

app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
