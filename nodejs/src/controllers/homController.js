import express from "express"
import db from "../models/index"
import bodyParser from "body-parser"
import CRUDservice from "../services/CRUDservice"


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

let getCRUD = (req, res) => {
    return res.render("crud")
}

let postCRUD = async (req, res) => {
    let data = await CRUDservice.createNewUser(req.body)
    return res.send("post crud success")
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser()
    return res.render("displayCRUD", {
        data: data
    })
}
let aboutController = (req, res) => {
    return res.render("about")
}

module.exports = {
    homeController: homeController,
    aboutController: aboutController,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD
}
