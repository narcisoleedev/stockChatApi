const authController = (req, res) => {
    res.status(200).json({msg: "token still valid"});
}

module.exports = { authController };