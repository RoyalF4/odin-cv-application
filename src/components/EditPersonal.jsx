import { useState } from 'react';

function EditPersonal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="edit-personal-container">
      <div className="input-container">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="hidden">{name}</p>
        </label>
      </div>
      <div className="input-container">
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <p className="hidden">{email}</p>
      </div>
      <div className="input-container">
        <label>
          Phone
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <p className="hidden">{phone}</p>
      </div>
      <button type="button">Edit</button>
      <button type="submit">Submit</button>
    </div>
  );
}

export default EditPersonal;
