import { useState } from 'react';

const NameForm = ({ onSubmit }: { onSubmit: (name: string) => void }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === '') return;
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <br />
      <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default NameForm;
