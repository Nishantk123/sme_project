const Ratings = require('../model/Ratings')


exports.createRating = async (rating_data) =>{
    return await Ratings.create(rating_data)
}

exports.getRatingByUserId = async (id) =>{
    return await Ratings.find(id)
}