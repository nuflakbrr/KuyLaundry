const { checkToken } = require('../../auth/tokenValidation')
const { getAdmin, getAdminById, postAdmin, updateAdmin, deleteAdmin, loginAdmin } = require('./admin.controller')

const router = require('express').Router()

router.get('/', checkToken, getAdmin)
router.post('/', postAdmin)
router.post('/login', loginAdmin)
router.get('/:id', checkToken, getAdminById)
router.put('/', checkToken, updateAdmin)
router.delete('/', checkToken, deleteAdmin)

module.exports = router