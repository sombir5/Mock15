const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ticket",
      required: true,
    },
    
  },
  { timestamps: true }
);

const Bookmark = mongoose.model("bookmark", bookmarkSchema);

module.exports = Bookmark;
