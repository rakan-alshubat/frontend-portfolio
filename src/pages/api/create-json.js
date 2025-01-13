import fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const jsonData = req.body;
        console.log(jsonData)
        const parsedData = JSON.parse(jsonData);
        const filePath = process.cwd() + '\\src\\files\\players\\' + parsedData.playerName +'.json';
  
        fs.writeFileSync(filePath, JSON.stringify(jsonData));
  
        res.status(200).json({ message: 'JSON file created successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to create JSON file' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }