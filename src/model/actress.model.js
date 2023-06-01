const BaseModel = require("./base.model");

class ActressModel extends BaseModel {
  async displayAllActress() {
    let sql = `SELECT * FROM ACTORS`;
    return await this.querySql(sql);
  }
}

module.exports = new ActressModel();
