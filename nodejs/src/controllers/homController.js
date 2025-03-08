import express from "express"

let homeController = (req, res) => {
    return res.render("homepage")
}

module.exports = {
    homeController: homeController
}
