require('dotenv').config();

const dropTables = require("../database/dropTables.js");
const createTables = require("../database/createTables.js");
const truncateTables = require("../database/truncateTables.js");
const logTables = require("../database/logTables.js");

const databaseControllerDrop = async(req, res)=>{
    const data = {
        dbToken: req.body.dbToken
    }
    if(data.dbToken==process.env.DBTOKEN){
        dropTables;
        return res.status(200).json({msg: "tables drop successfully"});
    }
    return res.status(500).json({msg: "internal server error"});
};

const databaseControllerCreate = async(req, res)=>{
    const data = {
        dbToken: req.body.dbToken
    }
    if(data.dbToken==process.env.DBTOKEN){
        createTables;
        return res.status(200).json({msg: "tables created successfully"});
    }
    return res.status(500).json({msg: "internal server error"});
};

const databaseControllerTruncate = async(req, res)=>{
    const data = {
        dbToken: req.body.dbToken
    }
    if(data.dbToken==process.env.DBTOKEN){
        truncateTables;
        return res.status(200).json({msg: "tables truncated successfully"});
    }
    return res.status(500).json({msg: "internal server error"});
};

const databaseControllerLog = async(req, res)=>{
    const data = {
        dbToken: req.body.dbToken
    }
    if(data.dbToken==process.env.DBTOKEN){
        const dbModel = await logTables();
        return res.status(200).json(dbModel);
    }
    return res.status(500).json({msg: "internal server error"});
};

module.exports = {databaseControllerDrop, databaseControllerCreate, databaseControllerTruncate, databaseControllerLog};