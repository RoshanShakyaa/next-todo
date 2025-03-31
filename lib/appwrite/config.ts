export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  categoryCollectionId: process.env.NEXT_PUBLIC_APPWRITE_CATEGORY_COLLECTION!,
  tasksCollectionId: process.env.NEXT_PUBLIC_APPWRITE_TASKS_COLLECTION!,
  apiKey: process.env.NEXT_APPWRITE_KEY!,
};
