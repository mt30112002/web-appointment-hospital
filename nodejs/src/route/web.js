import express from "express"
import homeController from "../controllers/homController"

let router = express.Router()

let webRoute = (app) => {
    router.get("/", homeController.homeController)
    router.get("/about", homeController.aboutController)
    router.get("/crud", homeController.getCRUD)
    router.post("/post-crud", homeController.postCRUD)
    return app.use("/", router)
}

module.exports=webRoute