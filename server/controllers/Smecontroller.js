const RegisterService = require("../services/RegisterService");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

exports.RegisterUser = async (req, res) => {
  try {
    // Get user input
    const { name, email, password } = req.body;
    // Validate user input
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await RegisterService.findUserByemail(email);
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);
    // Create user in our database
    const user = await RegisterService.registerUser({
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });
    // Create token
    const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY);
    // save user token
    user.token = token;
    // return new user
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await RegisterService.findUserByemail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY
      );
      // save user token
      user.token = token;
      // user
      res.status(200).json(user);
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const user = await RegisterService.updateUser(req.params.id, req.body);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.GetAllUser = async (req, res) => {
  try {
    const { name, price, page, per_page } = req.query;
    const queryObj = {};
    if (name) {
      queryObj["first_name"] = name;
    }
    if (price) {
      queryObj["price"] = price;
    }
    const user = await RegisterService.getAllUser(queryObj, page, per_page);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.GetUserById = async (req, res) => {
  try {
    res_data = {};
    const user = await RegisterService.GetUserById(req.params.id);
    if (user) {
      res_data["name"] = `${_.get(user, "first_name", "")} ${_.get(
        user,
        "last_name",
        ""
      )}`;
      res_data["email"] = _.get(user, "email", "");
      res_data["location"] = _.get(user, "location", "");
      res_data["about"] = _.get(user, "about", "");
      res_data["skills"] = _.get(user, "skills", []);
      res_data["appointment"] = _.get(user, "appointment", []);
      res_data["recent_connection"] = _.get(user, "recent_connection", []);
      let user_id = _.get(user, "_id");
      total_rating = 0;
      avarage_rating = 0;
      if (user_id) {
        rating_data = RatingService.getRatingByUserId({
          target_user_id: user_id,
        });
        res_data["ratings"] = raring_data;
        if (rating_data.length > 0) {
          total_rating = rating_data.length;
          avavarage_rating.reduce((sum, current) => {
            return sum + Number(current.rating_number);
          }, 0);
        }
      }
      res_data["total_rating"] = total_rating;
      res_data["avarage_rating"] = avarage_rating;

    }
    res.json({ data: res_data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.CreateRatings = async (req, res) => {
  try {
    const rating = await RatingService.createRating(req.body);
    res.json({ data: rating, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.CreateTransaction = async (req, res) =>{
  try{
    const transaction  = await TransactionService.createTransaction(req.body)
    res.json({ data: transaction, status: "success" });
  }catch{
    res.status(500).json({ error: err.message });
  }
}

exports.getAllRatings = async (req, res) =>{
  try{
    const { page, per_page } = req.query;
    const queryObj = {};
    const ratings = await RatingService.getAllRatings(page, per_page);
    res.json({ data: ratings, status: "success" });
  }catch(err){
    res.status(500).json({ error: err.message });
  }
}