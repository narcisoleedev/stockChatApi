const pool = require("./config.js");

const dropTables = async () => {
  try{
    const client = await pool.connect();
    const response = await client.query(
      `DROP TABLE usersTable;`,
    );
    client.release();
  } catch(err) {
    console.log(err);
  }
};
 
module.exports = dropTables;