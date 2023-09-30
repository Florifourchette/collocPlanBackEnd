import pool from '../DB/client.js';

const createUser = async (req, res) => {
    try {
        console.log(req.body);
      const { username, email, birthday, password } = req.body;
        const today = new Date();
        const dateString = today
          .toISOString()
          .replace('T', ' ')
          .replace('Z', ' +0000');
        const myQuery =
          'INSERT INTO users (username, email, birthday, token, credit, accountcreation) VALUES ($1, $2, $3, $4, 0, $5)';
        const { rows: newUsers } = await pool.query(myQuery, [
          username,
          email,
          birthday,
          password,
          dateString,
        ]);
        
        return res.json(newUsers);
   
  } catch (e) {
    console.log(e);
  }
};

export { createUser };
