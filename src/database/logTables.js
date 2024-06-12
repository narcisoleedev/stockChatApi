const pool = require("./config.js");

const logTables = async () => {
  try{
    const client = await pool.connect();
    const response = await client.query(
      `SELECT * FROM usersTable;`,
    );
    client.release();
    console.log(response);
    return response;
  } catch(err) {
    console.log(err);
  }
};
 
module.exports = logTables;