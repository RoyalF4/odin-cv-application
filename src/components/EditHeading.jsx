/* eslint-disable react/prop-types */
import '../css/EditHeading.css';
function EditHeading({ text }) {
  return (
    <div className="edit-heading-container">
      <h1>{text}</h1>
    </div>
  );
}

export default EditHeading;
