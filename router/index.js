const auth = require("./auth")
const calculatorAPI = require("./calculatorAPI")

module.exports = app => {
    app.use("/auth", auth)
    app.use("/calculatorAPI", calculatorAPI)
}