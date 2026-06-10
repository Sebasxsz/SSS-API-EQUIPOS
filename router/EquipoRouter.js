import {getEquipos} from '../controller/EquiposController.js'
import {getEquipoById} from '../controller/EquiposController.js'
import {createEquipo} from '../controller/EquiposController.js'
import {Router} from 'express'
const router = Router()




router.get('/equipos', getEquipos)
router.get('/equipos/:id', getEquipoById)
router.post('/create-equipos', createEquipo)



export default router