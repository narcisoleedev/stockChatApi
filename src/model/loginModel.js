const pool = require("../database/config.js");

const loginModelFunc = async (user) => {
  try {
    const client = await pool.connect();
    const response = await client.query(
      `SELECT password FROM usersTable WHERE cpf = '${user.cpf}'`,
    );
    client.release();
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { loginModelFunc };
