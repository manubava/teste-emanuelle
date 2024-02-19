import { CreateAccount } from "../usecases/create-one-account.js";


export class CreateAccountController {
  async handle(req, res) {
    const { data } = req.body;
    try {
      const createAccount = new CreateAccount();
      const newAccount = await createAccount.execute(data);
      return res.status(201).json(newAccount);
    } catch (error) {
      console.error("Error creating account:", error);
      return res.status(500).json({ error: "Failed to create account" });
    }
  }
}
