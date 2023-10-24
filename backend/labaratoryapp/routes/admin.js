const express = require('express')
const router =express.Router()
const {createStaff,getAllStaff}=require('../controller/admin.controller')

router.post('/staff/create',createStaff)
router.get('/staff/getAll',getAllStaff)

module.exports=router