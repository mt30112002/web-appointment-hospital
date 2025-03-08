import express from "express"
import homeController from "../controllers/homController"

let router = express.Router()

let webRoute = (app) => {
    router.get("/", homeController.homeController)

    return app.use("/", router)
}

module.exports=webRoute