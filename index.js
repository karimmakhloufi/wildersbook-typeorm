const sqlite3 = require("sqlite3").verbose();
const typeorm = require("typeorm");

const db = new sqlite3.Database("wildersdb");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "wildersdb",
  synchronize: true,
  entities: [],
});
