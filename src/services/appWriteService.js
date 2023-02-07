import { Client, Account, Databases } from 'appwrite';
import { Constant } from 'constants';

const client = new Client();

client.setEndpoint(Constant.appWrite_endpoint).setProject(Constant.appWrite_project_id);

export const account = new Account(client);
export const databases = new Databases(client, Constant.appWrite_database_id);
