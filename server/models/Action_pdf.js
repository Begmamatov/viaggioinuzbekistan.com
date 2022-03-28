const mongoose = require("mongoose");
const Action_phoneSchema = new mongoose.Schema(
  {
    data: {
      name: {
        type: String,
      },
      email: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Action_pdf", Action_phoneSchema);
