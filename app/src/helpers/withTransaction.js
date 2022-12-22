const pool = require("../db2");

async function withTransaction(callback) {
  let conn = null;
  try {
    conn = await pool.getConnection();
    await conn.beginTransaction();
    let [result] = await callback();
    await conn.commit();
    return result;
  } catch (error) {
    if (conn) await conn.rollback();
    console.error(error);
  } finally {
    if (conn) conn.release();
  }
}

module.exports = {
  withTransaction,
};
