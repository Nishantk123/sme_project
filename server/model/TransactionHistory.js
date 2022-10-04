const mongoose = require("mongoose");
var Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId;
const transactionSchema = new Schema({
    amount: { type: Number, default:0 },
    user_name: { type: String},
    date: {type: Date},
    transaction_type:{type: String}
})


module.exports = mongoose.model("Transaction", transactionSchema);
