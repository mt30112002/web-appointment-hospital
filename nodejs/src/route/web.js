import express from "express"
import homeController from "../controllers/homController"

let router = express.Router()

let webRoute = (app) => {
    router.get("/", homeController.homeController)
    router.get("/about", homeController.aboutController)
    return app.use("/", router)
}

module.exports=webRoute