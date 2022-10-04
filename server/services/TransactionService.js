const Transaction = require("../model/TransactionHistory");

exports.createTransaction = async (data) => {
  return await Transaction.create(data);
};

exports.getAllTransaction = async (page, per_page) => {
  return await Transaction.find()
    .limit(Number(per_page))
    .skip(Number(per_page) * (Number(page) - 1))
    .sort("desc");
};
