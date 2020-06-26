const { User } = require("../models");

module.exports = {
  store: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const checkedPassword = await user.checkPassword(password);

    if (!checkedPassword) {
      return res.status(401).json({ message: "Incorret password" });
    }

    const token = user.generateToken();

    return res.json({ user, token });
  },
};
