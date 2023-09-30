import pool from '../DB/client.js';

const createColoc = async (req, res) => {
  try {
    const {newColocName} = req.body;
    const query =
      'INSERT INTO coloc(name, creationdate) VALUES ($1, NOW())';

    const { rows: coloc } = await pool.query(query, [newColocName]);

    return res.json(coloc);
  } catch (error) {
    console.log(error);
  }
};

export {createColoc};
