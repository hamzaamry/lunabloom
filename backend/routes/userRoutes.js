import express from 'express'
import { authUser, logoutUser, registerUser , results } from '../controllers/userController.js'
const router = express.Router()

router.post('/auth', authUser)

router.post('/register' , registerUser)

router.post('/logout', logoutUser)

router.post('/results' , results)
router.get('/results' , results)


export default router;

