/* eslint-disable react/prop-types */
import '../css/Resume.css';
import '../css/ResumeHeading.css';
import PersonalDetail from './PersonalDetail';
import WorkExperience from './WorkExperience';
import ResumeHeading from './ResumeHeading';
import EducationInfo from './EducationInfo';

function Resume({ personal, work, education }) {
  return (
    <div className="resume-container">
      <PersonalDetail personalData={personal} />
      <hr />
      <ResumeHeading title="Education" />
      <EducationInfo education={education} />
      <ResumeHeading title="Work Experience" />
      <WorkExperience work={work} />
    </div>
  );
}

export default Resume;
