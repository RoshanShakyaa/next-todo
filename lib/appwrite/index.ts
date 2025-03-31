import { Account, Avatars, Client, Databases } from "node-appwrite";
import { appwriteConfig } from "./config";
import { cookies } from "next/headers";

export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.apiKey);

  return {
    get account() {
      return new Account(client);
    },
    get databses() {
      return new Databases(client);
    },
    get avatars() {
      return new Avatars(client);
    },
  };
};
