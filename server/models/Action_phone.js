const mongoose = require("mongoose");
const Action_phoneSchema = new mongoose.Schema(
  {
    data: {
      name: {
        type: String,
      },
      phone: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Action_phone", Action_phoneSchema);
