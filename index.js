import express from 'express'
import {sequelize} from './db/conexion.js'
import {Equipos} from './model/EquiposModel.js'
import EquipoRouter from './router/EquipoRouter.js'




const app = express()
const port = 3000

app.use(express.json())
app.use("/api", EquipoRouter)


const main = async () => {
    try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
    } catch (error) {
    console.error(`Error ${error}`);
    }
};
main();