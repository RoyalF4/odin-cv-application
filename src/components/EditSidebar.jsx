/* eslint-disable react/prop-types */
import '../css/EditSection.css';
import EditHeading from './EditHeading';
import EditPersonal from './EditPersonal';
import EditWork from './EditWork';
import EducationSection from './EducationSection';

function EditSidebar({
  onPersonalSubmit,
  education,
  setEducation,
  work,
  setWork,
}) {
  return (
    <div className="edit-container">
      <EditHeading text="Personal Details" />
      <EditPersonal onPersonalSubmit={onPersonalSubmit} />
      <EditHeading text="Education" />
      <EducationSection education={education} setEducation={setEducation} />
      <EditHeading text="Work Experience" />
      <EditWork work={work} setWork={setWork} />
    </div>
  );
}

export default EditSidebar;
