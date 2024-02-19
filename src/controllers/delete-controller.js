import { DeleteAccount } from "../usecases/delete-one-account.js";

export class DeleteAccountController {
  async handle(req, res) {
    const { id } = req.params;
    try {
      const deleteAccount = new DeleteAccount();
      await deleteAccount.execute(id);
      return res.status(204).send();
    } catch (error) {
      console.error("Error deleting account:", error);
      return res.status(500).json({ error: "Failed to delete account" });
    }
  }
}
