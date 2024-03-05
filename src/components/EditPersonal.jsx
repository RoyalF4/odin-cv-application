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
          <div className="input-container">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              Phone
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {show.edit && (
        <div className="personal-container">
          <div>
            <h3 className="data-heading">Name</h3>
            <p className="data">{formData.name}</p>
          </div>
          <div>
            <h3 className="data-heading">Email</h3>
            <p className="data">{formData.email}</p>
          </div>
          <div>
            <h3 className="data-heading">Phone</h3>
            <p className="data">{formData.phone}</p>
          </div>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default EditPersonal;
