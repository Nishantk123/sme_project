const mongoose = require("mongoose");
var Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId;
const userSchema = new Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String },
  location: { type: String, default: null },
  recent_connection: [
    {
      type: ObjectId,
    },
  ],
  about: { type: String },
  skills: [{ type: String }],
  balance: { type: String },
  appointment: [
    {
      type: Date,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
