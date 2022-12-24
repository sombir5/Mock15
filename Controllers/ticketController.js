const Ticket = require("../Models/ticketModel");

const createTicket = async (req, res) => {
  try {
    let tickets = await Ticket.create(req.body);
    tickets.save();
    return res
      .status(200)
      .send({ message: "Ticket Successfully created", tickets });
  } catch (error) {
    res.send(error.message);
  }
};
const getTicket = async (req, res) => {
  const { userId, category, sort = -1 } = req.query;
  // console.log(user);
  try {
    if (userId) {
      let tickets = await Ticket.find({ userId }).sort({
        createdAt: sort,
      }).populate("userId");
      return res.status(200).send({ tickets });
    } else if (category && userId) {
      let tickets = await Ticket.find({ userId: userId, category: category }).sort({
        createdAt: sort,
      }).populate("userId");
      return res.status(200).send({ tickets });
    }
    // else {
    //    let tickets = await Ticket.find({ user: user }).sort({
    //      createdAt: sort,
    //    }).populate("user");
    //    return res.status(200).send({ tickets });
    // }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { createTicket, getTicket };
