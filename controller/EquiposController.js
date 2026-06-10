import {Equipos} from '../model/EquiposModel.js'

export const getEquipos = async (req, res) => {
    try {
        const equipos = await Equipos.findAll()  
        return res.status(200).json({ message: 'Equipos obtenidos exitosamente', equipos: equipos })
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
        return res.status(200).json({ message: 'Equipo encontrado', equipo: equipo })
    } catch (error) {
        return res.status(500).json({ error: 'Ocurrió un error al intentar buscar el equipo'})
    }
}


export const createEquipo = async (req, res) => {
    try {
        const { nombre, ciudad, país, estadio, año_fundación } = req.body
        if (!nombre || !ciudad || !país || !estadio || !año_fundación) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios'})
        }
        if (typeof año_fundación !== 'number' || año_fundación <= 0) {
            return res.status(400).json({ error: 'El año de fundación debe ser un número positivo'})
        }
        if (typeof nombre !== 'string' || typeof ciudad !== 'string' || typeof país !== 'string' || typeof estadio !== 'string') {
            return res.status(400).json({ error: 'Los campos nombre, ciudad, país y estadio deben ser cadenas de texto'})
        }
        if (nombre.trim() === '' || ciudad.trim() === '' || país.trim() === '' || estadio.trim() === '') {
            return res.status(400).json({ error: 'Los campos nombre, ciudad, país y estadio no pueden estar vacíos'})
        }
        const nuevoEquipo = await Equipos.create({ nombre, ciudad, país, estadio, año_fundación })
        return res.status(201).json({ message: 'Equipo creado exitosamente', equipo: nuevoEquipo })
    } catch (error) {
        return res.status(500).json({ error: 'Ocurrió un error al intentar crear el equipo'})
    }
}