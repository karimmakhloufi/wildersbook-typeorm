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

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/wilder", async (req, res) => {
  try {
    const wilders = await dataSource.getRepository(Wilder).find();
    res.send(wilders);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

app.post("/wilder", async (req, res) => {
  try {
    await dataSource.getRepository(Wilder).save(req.body);
    res.send("created");
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

app.get("/skill", async (req, res) => {
  try {
    const skills = await dataSource.getRepository(Skill).find();
    res.send(skills);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

app.post("/skill", async (req, res) => {
  try {
    await dataSource.getRepository(Skill).save(req.body);
    res.send("created");
  } catch (err) {
    console.log(err);
    res.send("error");
  }
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
