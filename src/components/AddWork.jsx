/* eslint-disable react/prop-types */
import '../css/addForm.css';
import { useState } from 'react';

function AddWork({ handleNewWork }) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    details: '',
    startDate: '',
    endDate: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function autoResize(event) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  }

  return (
    <form
      className="addForm"
      onSubmit={(e) => {
        e.preventDefault();
        handleNewWork(formData);
      }}
    >
      <label htmlFor="name">Company</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="ACME"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Test Dummy"
        value={formData.value}
        onChange={handleChange}
      />
      <label htmlFor="details">Role</label>
      <textarea
        id="details"
        name="details"
        placeholder="Job details..."
        value={formData.details}
        onChange={handleChange}
        onInput={autoResize}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="text"
        id="startDate"
        name="startDate"
        placeholder="03/2020"
        value={formData.startDate}
        onChange={handleChange}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="text"
        id="endDate"
        name="endDate"
        placeholder="05/2022"
        value={formData.endDate}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default AddWork;
