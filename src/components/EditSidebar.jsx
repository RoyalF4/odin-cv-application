/* eslint-disable react/prop-types */
import EditHeading from './EditHeading';
import EditPersonal from './EditPersonal';
import EditWork from './EditWork';
import EditEducation from './EditEducation';

function EditSidebar({ onPersonalSubmit }) {
  return (
    <div className="edit-container">
      <EditHeading text="Personal Details" />
      <EditPersonal onPersonalSubmit={onPersonalSubmit} />
      <EditHeading text="Education" />
      <EditEducation />
      <EditHeading text="Work Experience" />
      <EditWork />
    </div>
  );
}

export default EditSidebar;
