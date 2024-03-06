/* eslint-disable react/prop-types */
function Education({ id, name, onDelete, onEdit }) {
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Education;
