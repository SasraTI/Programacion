const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
    host: "localhost", // Cambia por tu host
    user: "root", // Cambia por tu usuario
    password: "1234", // Cambia por tu contraseña
    database: "Programa", // Cambia por tu base de datos
});


db.connect(err => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conexión exitosa a la base de datos.");
});

//registro
app.post("/register", async (req, res) => {
    const { username, password, confirmPassword} = req.body;

    console.log("Datos recibidos:", { username, password, confirmPassword });

    // Validaciones básicas
    if (!username || !password || !confirmPassword) {
        return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Las contraseñas no coinciden." });
    }

    try {
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insertar en la base de datos
        const query = "INSERT INTO register (username, password, confirmPassword) VALUES (?, ?, ?)";
db.query(query, [username, hashedPassword, hashedPassword], (err, result) => {
    if (err) {
        console.error("Error al registrar el usuario:", err);
        return res.status(500).json({ message: "Error al registrar el usuario." });
    }
    res.status(201).json({ message: "Usuario registrado exitosamente." });
});
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor." });
    }
});

// Endpoint para manejar el login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT * FROM usuarios WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Error en el servidor" });
        }

        if (results.length > 0) {
            res.status(200).json({ message: "Inicio de sesión exitoso", user: results[0] });
        } else {
            res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
