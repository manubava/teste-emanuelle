import express from "express";
import cors from "cors";
import { mongoSetup } from "./src/config/mongo-config.js";
import Accounts from "./src/routes/route-accounts.js";

const server = express();

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
const port = 5000;








server.listen(port, async () => {
  console.log(`Server is running`);
  // Init database connection
  mongoSetup().then(() => {
    //Routes Accounts
    server.use(`/api`, Accounts);
  });
});



