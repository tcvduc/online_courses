const db = require("../utils/db");

module.exports = {
  all() {
    const sql = "select * from category";
    return db.load(sql);
  },
};
