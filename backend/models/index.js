const Sequelize = require("sequelize");
const meme = require("./meme");
const tag = require("./tag");
const user = require("./user");
const db = require("../db/db");
const bcryptjs = require("bcryptjs")

const models = {
  meme,
  tag,
  user,
};

for (const model of Object.values(models)) {
  if (model.associate) {
    model.associate(models);
  }
}

// créer un user une fois que le model est créé
db.sync().then(async () => {
  const admin = await user.findOne({
    where: {
      username: "admin",
    },
  });

  if (!admin) {
    await user.create({
      username: "admin",
      password: bcryptjs.hashSync("admin"),
    });
  }
});
