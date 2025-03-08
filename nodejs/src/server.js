import express from "express"
import configViewEngine from "./config/viewEngine"
import bodyParser from "body-parser"
import webRoute from "./route/web"
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


configViewEngine(app)
webRoute(app)

let port = process.env.PORT || 8069
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});