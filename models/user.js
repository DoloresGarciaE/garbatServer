const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  pwd: String,
});

userSchema.set('collection', 'user');

// eslint-disable-next-line func-names
// eslint-disable-next-line consistent-return
userSchema.pre('save', function (next) {
  const user = this;
  if (this.isModified('pwd') || this.isNew) {
    // eslint-disable-next-line consistent-return
    bcrypt.genSalt(10, (saltError, salt) => {
      if (saltError) return next(saltError);

      // eslint-disable-next-line consistent-return
      bcrypt.hash(user.pwd, salt, (hashError, hash) => {
        if (hashError) return next(hashError);
        user.pwd = hash;
        next();
      });
    });
  } else return next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.pwd);
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
