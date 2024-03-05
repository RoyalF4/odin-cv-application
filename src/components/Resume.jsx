/* eslint-disable react/prop-types */
import PersonalDetail from './PersonalDetail';
import Education from './Education';
import WorkExperience from './WorkExperience';

function Resume({ personalData }) {
  return (
    <div className="resume-container">
      <PersonalDetail personalData={personalData} />
      <Education />
      <WorkExperience />
    </div>
  );
}

export default Resume;
