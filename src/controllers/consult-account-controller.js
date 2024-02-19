import { ConsultAccount } from "../usecases/consult-one-account.js";

export class ConsultAccountController {
  async handle(req, res) {
    const { id } = req.params;
    try {
      const consultAccount = new ConsultAccount();
      const account = await consultAccount.execute(id);
      if (!account) {
        return res.status(404).json({ error: "Account not found" });
      }
      return res.status(200).json(account);
    } catch (error) {
      console.error("Error fetching account:", error);
      return res.status(500).json({ error: "Failed to fetch account" });
    }
  }
}
