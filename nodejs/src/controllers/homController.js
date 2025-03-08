import express from "express"
import db from "../models/index"

let homeController = async (req, res) => {
    try {
        let data = await db.User.findAll()
        console.log(data)
        return res.render("homepage", {
            data: data,
            data2: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error)
    }
}

let aboutController = (req, res) => {
    return res.render("about")
}

module.exports = {
    homeController: homeController,
    aboutController: aboutController
}
