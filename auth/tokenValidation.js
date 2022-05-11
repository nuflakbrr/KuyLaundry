const { verify } = require('jsonwebtoken')

const checkToken = (req, res, next) => {
    const token = req.get('authorization')

    if (!token) {
        return res.status(401).json({
            success: 0,
            message: 'Access denied, no token provided'
        })
    } else {
        let decoded = token.slice(7)
        verify(decoded, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: 0,
                    message: 'Invalid token'
                })
            } else {
                let user = decoded.result
                next()
            }
        })
    }
}

module.exports = { checkToken }