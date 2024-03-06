/* eslint-disable react/prop-types */
import PersonalDetail from './PersonalDetail';
import WorkExperience from './WorkExperience';
import '../css/Resume.css';

function Resume({ personalData }) {
  return (
    <div className="resume-container">
      <PersonalDetail personalData={personalData} />
      <hr />
      {/* //<EducationInfo /> */}
      <WorkExperience />
    </div>
  );
}

export default Resume;
