import { RepositoryAccount } from '../infrastructure/db/repository/repository-accounts.js';

export class ConsultAccount {
  async execute(id) {
    try {
      const repositoryAccount = new RepositoryAccount();
      return await repositoryAccount.fetch(id);
    } catch (error) {
      throw new Error(`Failed to fetch account: ${error}`);
    }
  }
}
