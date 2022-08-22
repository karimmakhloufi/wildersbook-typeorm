const typeorm = require("typeorm");

const Wilder = require("./entity/Wilder");
const Skill = require("./entity/Skill");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, Skill],
});
dataSource.initialize().then(() => {
  dataSource.getRepository(Wilder).save({ name: "Jane Doe" });
});
