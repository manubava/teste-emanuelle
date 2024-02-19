import { RepositoryAccount } from '../infrastructure/db/repository/repository-accounts.js';

export class DeleteAccount {
  async execute(id) {
    try {
      const repositoryAccount = new RepositoryAccount();
      return await repositoryAccount.delete(id);
    } catch (error) {
      throw new Error(`Failed to delete account: ${error}`);
    }
  }
}
