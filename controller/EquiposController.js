import {Equipos} from '../model/EquiposModel.js'

export const getEquipos = async (req, res) => {
    try {
        const equipos = await Equipos.findAll()  
        return res.status(200).json(equipos)
    } catch (error) {
        return res.status(500).json({ error: 'Ocurrió un error al intentar obtener los equipos' })
    }
}


export const getEquipoById = async (req, res) => {
    try {
        const { id } = req.params
        const equipo = await Equipos.findByPk(id)
        if (!equipo) {
            return res.status(404).json({ error: 'No se encontró ningún equipo con el ID proporcionado'})
        }
        return res.status(200).json(equipo)
    } catch (error) {
        return res.status(500).json({ error: 'Ocurrió un error al intentar buscar el equipo'})
    }
}