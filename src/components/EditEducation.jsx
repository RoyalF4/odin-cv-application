/* eslint-disable react/prop-types */
import { useState } from 'react';

function EditEducation({ id, education, onSubmit }) {
  const school = education.filter((school) => id === school.id)[0];
  const [formData, setFormData] = useState(school);

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
        onSubmit(formData, id);
      }}
    >
      <label>
        School:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Hogwarts"
        />
      </label>
      <label>
        Degree:
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          placeholder="Masters in Broom Handling"
        />
      </label>
      <label>
        Start Date:
        <input
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          placeholder="08/2020"
        />
      </label>
      <label>
        End Date:
        <input
          type="text"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          placeholder="05/2024, present..."
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default EditEducation;
