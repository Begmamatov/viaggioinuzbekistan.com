const express = require("express");
const next = require("next");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const path = require("path").join(__dirname, "/public/uploads");

// New Code +++
const https = require("https");
const http = require("http");
const fs = require("fs");
// New code ---

connectDB();

const PORT = process.env.PORT || 3003;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use("/public/uploads", express.static(path));
    server.use(bodyParser.json());
    server.use(cors());

    server.use("/api/action_phone", require("./routes/Action_phone_router"));
    server.use("/api/action_pdf", require("./routes/Action_pdf_router"));
    server.use("/api/action_bron", require("./routes/Action_bron_router"));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
