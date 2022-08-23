const typeorm = require("typeorm");
const express = require("express");

const Wilder = require("./entity/Wilder");
const Skill = require("./entity/Skill");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, Skill],
});

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const start = async () => {
  await dataSource.initialize();
  /*
  await dataSource.getRepository(Skill).save({ name: "Javascript" });
  const jsSkill = await dataSource
    .getRepository(Skill)
    .findOneBy({ name: "Javascript" });
  console.log("jsSkill", jsSkill);
  dataSource
    .getRepository(Wilder)
    .save({ name: "Jane Doe", skills: [jsSkill] });
    */
};

start();
