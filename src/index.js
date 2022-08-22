const typeorm = require("typeorm");

const Wilder = require("./entity/Wilder");
const Skill = require("./entity/Skill");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, Skill],
});
dataSource.initialize().then(async () => {
  await dataSource.getRepository(Skill).save({ name: "Javascript" });
  const jsSkill = await dataSource
    .getRepository(Skill)
    .findOneBy({ name: "Javascript" });
  console.log("jsSkill", jsSkill);
  dataSource
    .getRepository(Wilder)
    .save({ name: "Jane Doe", skills: [jsSkill] });
});
