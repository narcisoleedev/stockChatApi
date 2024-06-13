const pool = require("./config.js");

const createTables = async () => {
  try {
    const client = await pool.connect();
    const response = await client.query(
      `CREATE TABLE usersTable(
          username VARCHAR(50) NOT NULL,
          email VARCHAR(50) UNIQUE NOT NULL,
          cpf VARCHAR(50) PRIMARY KEY NOT NULL,
          password VARCHAR(100) NOT NULL
      );`,
    );
    client.release();
  } catch (err) {
    console.log(err);
  }
};

module.exports = createTables;
