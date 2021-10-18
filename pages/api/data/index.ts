import fs from 'fs';
import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

const readData = () => {
  const data = fs.readFileSync(
    path.join(process.cwd(), 'data', 'db.json'),
    'utf-8'
  );
  return JSON.parse(data);
};

const writeData = (data: { notes: any[] }) => {
  fs.writeFileSync(
    path.join(process.cwd(), 'data', 'db.json'),
    JSON.stringify(data)
  );
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { notes } = readData();

    res.status(200).json({ notes });
  }

  if (req.method === 'POST') {
    const { notes }: { notes: any[] } = readData();
    notes.push(req.body);

    const newData = { notes };

    writeData(newData);

    res.status(200).json({ message: 'successfully added.' });
  }
};

export default handler;
