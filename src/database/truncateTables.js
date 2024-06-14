const pool = require("./config.js");

const truncateTables = async () => {
  try {
    const client = await pool.connect();
    const response = await client.query(`DELETE FROM usersTable;`);
    client.release();
  } catch (err) {
    console.log(err);
  }
};

module.exports = truncateTables;
