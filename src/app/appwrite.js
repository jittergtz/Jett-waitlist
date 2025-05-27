import { Client, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject(process.env.APPWRITE_PROJECT); 

// Initialize Databases
export const databases = new Databases(client);

// Database and collection constants
export const DATABASE_ID = '680a1e3500146ccc8fc6';
export const WAITLIST_COLLECTION_ID = '680a1f01000b88ad2c9c';

// Function to add email to waitlist
export async function addToWaitlist(email) {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      WAITLIST_COLLECTION_ID,
      'unique()', // Appwrite will generate a unique ID
      {  EmailAddress: email }
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { success: false, error };
  }
}