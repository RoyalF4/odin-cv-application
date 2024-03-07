/* eslint-disable react/prop-types */
import '../css/EditWork.css';

function Work({ id, name, onDelete, onEdit }) {
  return (
    <div className="workItem">
      <h3>{name}</h3>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Work;
