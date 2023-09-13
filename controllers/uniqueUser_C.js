import pool from '../DB/client.js';

const getUser = async (req, res) => {
  try {
    const {userID} = req.params;
    const { rows: uniqueUser } = await pool.query(
      'SELECT * FROM users WHERE id = $1',
      [userID]
    );
    return res.json(uniqueUser);
  } catch (e) {
    console.log(e);
  }
};

export { getUser };
