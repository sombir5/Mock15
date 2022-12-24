const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
      userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    category:{type:String,required:true},
    title:{type:String,required:true},
    message:{type:String,required:true},
},{timestamps:true});

const Ticket = mongoose.model("ticket",ticketSchema);

module.exports = Ticket;