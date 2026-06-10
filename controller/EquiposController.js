import {Equipo} from '../model/EquiposModel.js'

export const getEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.findAll()  
        return res.json(equipos)
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los equipos' })
    }
}


