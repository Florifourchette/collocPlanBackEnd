import pool from '../DB/client.js';

const getUser = async (req, res) => {
  try {
    const { username } = req.query;
    console.log(username)
    const { rows: uniqueUser } = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    return res.json(uniqueUser);
  } catch (e) {
    console.log(e);
  }
};

export { getUser };
