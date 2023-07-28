// api/totalUsers.js
import { Client } from '@clerk/clerk-sdk-node';

const clerkClient = new Client({
  apiKey: process.env.CLERK_SECRET_KEY,
});

export default async function handler(req, res) {
  try {
    const { totalUsers } = await clerkClient.users.getCount();
    res.json({ totalUsers });
  } catch (error) {
    console.error('Error fetching total users:', error);
    res.status(500).json({ error: 'Error fetching total users' });
  }
}
