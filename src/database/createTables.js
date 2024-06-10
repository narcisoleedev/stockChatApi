const { loginModelFunc } = require("../model/loginModel.js");
const pool = require("./config.js");

const createTables = async () => {
  const client = await pool.connect();
  const response = await client.query(
    `CREATE TABLE usersTable(
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        cpf VARCHAR(50) PRIMARY KEY NOT NULL,
        password VARCHAR(100) NOT NULL
    );`,
  );
  client.release();
  console.log(response);
};
 
module.exports = createTables;