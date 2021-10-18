import { useEffect, useState } from 'react';
import { NextPage } from 'next';

type Note = {
  title: string;
  details: string;
  category: string;
  id: number;
};

interface Props {}

const HomePage: NextPage<Props> = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setNotes(data.notes));
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
};

export default HomePage;
