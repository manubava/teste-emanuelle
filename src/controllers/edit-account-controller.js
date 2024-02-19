import { UpdateAccount } from "../usecases/edit-one-acount.js";

export class UpdateAccountController {
  async handle(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      const updateAccount = new UpdateAccount();
      const updatedAccount = await updateAccount.execute(id, newData);
      return res.status(200).json(updatedAccount);
    } catch (error) {
      console.error("Error updating account:", error);
      return res.status(500).json({ error: "Failed to update account" });
    }
  }
}
