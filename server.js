const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const routes = require("./routes");

app.use(express.static("client/build"));
app.use(routes);

app.listen(port, function()  {
    console.log("App listening on port " + port);
});