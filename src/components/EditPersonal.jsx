/* eslint-disable react/prop-types */
import { useState } from 'react';

function EditPersonal({ onPersonalSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [show, setShow] = useState({
    form: true,
    edit: false,
    data: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShow({
      form: false,
      edit: true,
      data: true,
    });
    onPersonalSubmit(formData);
  }

  function handleEdit() {
    setShow({
      form: true,
      edit: false,
      data: false,
    });
  }

  return (
    <div className="edit-personal-container">
      {show.form && (
        <form className="personal-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Example123@email.com"
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="123-456-7890"
          />

          <button type="submit">Submit</button>
        </form>
      )}
      {show.edit && (
        <div className="personal-container">
          <h3 className="data-heading">Name</h3>
          <p className="data">{formData.name}</p>

          <h3 className="data-heading">Email</h3>
          <p className="data">{formData.email}</p>

          <h3 className="data-heading">Phone</h3>
          <p className="data">{formData.phone}</p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default EditPersonal;
