const express = require('express')
const router = express.Router();
const mysqlConnection = require('../database');

//En esta parte agregamos nuestros metodos get y post

//Buscar Administradores
router.get('/Cerbero/BackEnd/Administrador', (req, res) => {
    let consulta = "SELECT *FROM Administrador "
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            res.status(404).json({error: "No hay administradores disponibles"});
        }
    })
});

//Buscar Desarrolladores
router.get('/Cerbero/BackEnd/Desarrollador', (req, res) => {
    let consulta = "SELECT *FROM Desarrollador "
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.status(404).json({error: "No hay administradores disponibles"});
        }
    })
});

//Buscar Administradores
router.get('/Cerbero/BackEnd/Publica', (req, res) => {
    let consulta = "SELECT *FROM Publica "
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.status(404).json({error: "No hay administradores disponibles"});
        }
    })
});

//Buscar Administradores
router.get('/Cerbero/BackEnd/Economia', (req, res) => {
    let consulta = "SELECT *FROM Economia "
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.status(404).json({error: "No hay administradores disponibles"});
        }
    })
});



module.exports = router;