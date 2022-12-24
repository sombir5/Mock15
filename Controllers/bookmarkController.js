const Bookmark = require("../Models/bookmarkModel");



const createBookmark = async (req, res) => {
  try {
    let bookmarks = await Bookmark.create(req.body)
    bookmarks.save();
    return res
      .status(200)
      .send({ message: "Bookmark Successfully created", bookmarks });
  } catch (error) {
    res.send(error.message);
  }
};
const getBookmark = async (req, res) => {
    const {userId,ticket} =req.query
  try {
    let bookmarks = await Bookmark.find({ userId:userId, ticket:ticket }).populate([
      "user",
      "ticket",
    ]);
    return res
      .status(200)
      .send({ bookmarks });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { createBookmark,getBookmark};