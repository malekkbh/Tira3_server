const USER_MODEL = require("../models/user.model");

const createUser = (req, res) => {
  const { name, phone, ID, user_lvl } = req.body;

  USER_MODEL.create({
    name: name,
    phone,
    ID,
    user_lvl,
  })
    .then((createRes) => {
      res.status(200).json(createRes);
    })
    .catch((e) => res.status(500).json({ error: true, errorMessage: e }));

};

module.exports = {
  createUser,
};
