const mongoose = require("mongoose");
const Action_bronSchema = new mongoose.Schema(
  {
    data: {
      name: {
        type: String,
      },
      agent: {
        type: String,
      },
      location: {
        type: String,
      },
      pasport: {
        type: String,
      },
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
      website: {
        type: String,
      },
      date: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Action_bron", Action_bronSchema);
