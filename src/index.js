const typeorm = require("typeorm");

const Wilder = require("./entity/Wilder");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder],
});
dataSource.initialize().then(() => {
  dataSource.getRepository(Wilder).save({ name: "Jane Doe" });
});
