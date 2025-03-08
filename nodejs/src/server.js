import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();

let app = express();

//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT;
app.listen(port, () => {
    console.log(`use  localhost:${port}`);
});

