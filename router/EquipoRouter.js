import {getEquipos} from '../controller/EquiposController.js'
import {Router} from 'express'
const router = Router()




router.get('/equipos', getEquipos)


export default router