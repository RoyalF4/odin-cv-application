/* eslint-disable react/prop-types */
import Education from './Education';
import { useState } from 'react';
import AddEducation from './AddEducation';
import EditEducation from './EditEducation';
import { v4 as uuidv4 } from 'uuid';

function EducationSection({ education, setEducation }) {
  const [showAddForm, setShowAddForm] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showList, setShowList] = useState(false);
  const [editId, setEditId] = useState();

  if (education.length === 0 && !showAddForm) {
    setShowAddForm(true);
  }
  function handleDelete(id) {
    setEducation(education.filter((school) => school.id !== id));
  }

  function handleAdd(formData) {
    setEducation([...education, { id: uuidv4(), ...formData }]);
    setShowAddForm(false);
    setShowList(true);
  }

  function handleEditClick(id) {
    setEditId(id);
    setShowList(false);
    setShowEdit(true);
  }

  function handleEdit(formData, id) {
    console.log(formData, id);
    setEducation(
      education.map((school) => {
        if (school.id === id) {
          console.log({ ...formData, id: id });
          return { ...formData, id: id };
        } else return school;
      })
    );
    setShowList(true);
    setShowEdit(false);
  }

  return (
    <div className="edit-education-container">
      {showList &&
        education.map((school) => (
          <Education
            key={school.id}
            id={school.id}
            name={school.name}
            onEdit={handleEditClick}
            onDelete={handleDelete}
          />
        ))}
      {showAddForm && <AddEducation onSubmit={handleAdd} />}
      {showEdit && (
        <EditEducation
          id={editId}
          education={education}
          onSubmit={handleEdit}
        />
      )}
    </div>
  );
}

export default EducationSection;
