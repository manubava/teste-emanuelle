import express from "express";
import { ConsultAllAccountsController } from "../controllers/consult-all-accounts-controller.js";
import { DeleteAccountController } from "../controllers/delete-controller.js";
import { CreateAccountController } from "../controllers/create-controller.js";
import { ConsultAccountController } from "../controllers/consult-account-controller.js";
import { UpdateAccountController } from "../controllers/edit-account-controller.js";


const router = express.Router();

router.get("/accounts", new ConsultAllAccountsController().handle);
router.delete("/accounts/:id", new DeleteAccountController().handle);
router.post("/accounts", new CreateAccountController().handle);
router.get("/accounts/:id", new ConsultAccountController().handle);
router.put("/accounts/:id", new UpdateAccountController().handle);

export default router;


