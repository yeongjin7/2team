const db = require("../../config/db.js");

const getMapBoardByPlace = async (req, res, Place) => {
  try {
    const conn = await db.getConnection();
    const rows = await conn.query("SELECT * FROM map_board WHERE mapPlace = ?", [Place]);
    console.log(rows);
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const KaKaoMap = async (req, res) => {
  await getMapBoardByPlace(req, res, '강릉1번');
};

const KaKaoMap2 = async (req, res) => {
  await getMapBoardByPlace(req, res, '강릉2번');
};

module.exports = {
  KaKaoMap,
  KaKaoMap2
};
