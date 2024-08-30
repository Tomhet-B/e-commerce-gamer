const express = require("express");  //Importar express.
const morgan = require("morgan"); //Importar morgan.
const database = require("./database"); //Importar conexion a BD.
const cors = require("cors"); //Importar cors

//Initial config.
const app = express(); //Instancia de express.
const port = 9000; // Puerto en el que se ejecutará el servidor.

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

//Middlewares.
app.use(cors({
    origin: ["http://127.0.0.1:5500"]
}))

app.use(morgan("dev"));
app.use(express.json());

//Routes.
app.get("/products", async(req,res) =>{
    const connection = await database.getConnection();
    const result = await connection.query("SELECT * FROM PRODUCTO;");
    res.json(result);
})

app.post("/cart/buy", async(req, res) => {
    if(req.body && req.body.length > 0)
        return res.sendStatus(200);

    res. sendStatus(400);
})