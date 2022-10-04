const User = require("../model/User");

exports.registerUser = async (user) => {
  return await User.create(user);
};

exports.findUserByemail = async (email) => {
  return await User.findOne({ email });
};

exports.updateUser = async (id, user) => {
  return await User.findByIdAndUpdate(id, blog);
};

exports.getAllUser = async (queryObj, page, per_page) => {
  return await User.find(queryObj)
    .limit(Number(per_page))
    .skip(Number(per_page) * (Number(page) - 1))
    .sort("desc");
};

exports.getUserById = async (id) =>{
    return await User.find(id)
}
