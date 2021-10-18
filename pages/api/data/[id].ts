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
  if (req.method === 'DELETE') {
    const { id } = req.query;

    const { notes }: { notes: any[] } = readData();
    const newNotes = notes.filter((note) => note.id !== id);
    const newData = { notes: newNotes };

    writeData(newData);
    res.status(200).json({ message: 'Deleted successfully.' });
  }
};

export default handler;
