/* eslint-disable react/prop-types */
import { useState } from 'react';

function AddEducation({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <form
      className="educationForm"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formData);
      }}
    >
      <label htmlFor="name">School</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Hogwarts"
      />

      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        name="degree"
        value={formData.degree}
        onChange={handleChange}
        placeholder="Masters in Broom Handling"
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        type="text"
        id="startDate"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        placeholder="08/2020"
      />

      <label htmlFor="endDate">End Date</label>
      <input
        type="text"
        id="endDate"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        placeholder="05/2024, present..."
      />
      <button>Submit</button>
    </form>
  );
}

export default AddEducation;
