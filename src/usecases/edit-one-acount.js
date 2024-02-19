import { RepositoryAccount } from '../infrastructure/db/repository/repository-accounts.js';

export class UpdateAccount {
  async execute(id, newData) {
    try {
      const repositoryAccount = new RepositoryAccount();
      const existingAccount = await repositoryAccount.fetch(id);
      if (!existingAccount) {
        throw new Error("Account not found");
      }
      Object.assign(existingAccount, newData);
      return await existingAccount.save();
    } catch (error) {
      throw new Error(`Failed to update account: ${error}`);
    }
  }
}
