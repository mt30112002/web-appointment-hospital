import bcrypt from "bcrypt"
import db from "../models/index"
const salt = bcrypt.genSaltSync(10)

let hashUserPassword = (password) => {
    return new Promise( async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt)
            resolve(hash)
        } catch (error) {
            reject(error);
        }
    });
};


let createNewUser = async (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await hashUserPassword(data.password)
            db.User.create({
                email: data.email,
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === "1" ? true : false,
                roleID: data.role,
            })
            resolve("Create user successfully")
        } catch (error) {
            reject(error)
        }
    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true,
            })
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewUser,
    getAllUser
};

