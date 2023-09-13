import pool from "../DB/client.js";

const getUsers = async(req, res) => {
  try{
    const { rows: users } = await pool.query(
      'SELECT * FROM users'
  );
    return res.json({users})
  }
  catch (e) {
    console.log(e)
    }
}

export {getUsers}