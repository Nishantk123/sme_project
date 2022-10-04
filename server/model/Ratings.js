const mongoose = require("mongoose");
var Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId;
const ratingSchema = new Schema({
    use_name: { type: String },
    rating_number : { type: Number,default:0},
    rating_description:  { type: String },
    target_user_id : { type: ObjectId },
    rating_time: {type: Date,}
})


module.exports = mongoose.model("Ratings", ratingSchema);
