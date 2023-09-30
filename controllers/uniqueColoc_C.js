import pool from '../DB/client.js';

const getColoc = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { rows: uniqueColoc } = await pool.query(
      'SELECT * FROM coloc WHERE id = $1',
      [id]
    );
    return res.json(uniqueColoc);
  } catch (e) {
    console.log(e);
  }
};

export { getColoc };
