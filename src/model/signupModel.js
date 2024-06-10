const pool = require("../database/config.js");

const signupModelFunc = async (user) => {
    try{
        const client = await pool.connect();
        console.log(user);
        const response = await client.query(
            `INSERT INTO usersTable (username, email, cpf, password) VALUES ('${user.name}', '${user.email}', '${user.cpf}', '${user.password}')`
        );
        client.release();
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = { signupModelFunc };