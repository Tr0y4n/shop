const ApiError = require('../error/apiError')
class UserController {
    async registration(req, res) {
    
    }

    async login(req, res) {
        
    }

    async authCheck(req, res, next) {
        const {id} = req.query
        if (!id) return next(ApiError.badRequest('no id'))
        res.json(id)
    }
}

module.exports = new UserController()