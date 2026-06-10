import { DataTypes} from 'sequelize'

import { sequelize } from '../db/conexion.js'


export const Equipos = sequelize.define(
    'Equipos', 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    
    país: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    estadio: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    año_fundación: {
        type: DataTypes.INTEGER,
        allowNull: false    
    }
    },
    {
        tableName: 'Equipos',
        timestamps: false
    });


    console.log(Equipos === sequelize.model.Equipos) // true