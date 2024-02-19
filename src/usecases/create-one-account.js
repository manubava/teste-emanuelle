import { RepositoryAccount } from '../infrastructure/db/repository/repository-accounts.js';

export class CreateAccount {
  async execute(data) {
    try {
      const repositoryAccount = new RepositoryAccount();
      return await repositoryAccount.create(data);
    } catch (error) {
      throw new Error(`Failed to create account: ${error}`);
    }
  }
}
