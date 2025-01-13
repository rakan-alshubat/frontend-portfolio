import fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {  
        const jsonFiles = fs.readdirSync(process.cwd() + '\\src\\files\\players')
        res.status(200).json({ message: jsonFiles});
      } catch (error) {
        res.status(500).json({ error: 'Failed to create JSON file' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }