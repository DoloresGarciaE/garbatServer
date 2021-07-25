const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

let userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  pwd: String,
});

userSchema.set("collection", "user");

userSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("pwd") || this.isNew) {
    bcrypt.genSalt(10, (saltError, salt) => {
      if (saltError) return next(saltError);
      else {
        bcrypt.hash(user.pwd, salt, (hashError, hash) => {
          if (hashError) return next(hashError);
          user.pwd = hash;
          next();
        });
      }
    });
  } else return next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.pwd);
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
