import EditSection from './EditSection';
import EditHeading from './EditHeading';

function EditSidebar() {
  return (
    <div className="edit-container">
      <EditHeading text="Personal Details" />
      <EditSection />
      <EditHeading text="Education" />
      <EditSection />
      <EditHeading text="Work Experience" />
      <EditSection />
    </div>
  );
}

export default EditSidebar;
