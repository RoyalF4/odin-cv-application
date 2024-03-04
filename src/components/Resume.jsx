import PersonalDetail from './PersonalDetail';
import Education from './Education';
import WorkExperience from './WorkExperience';

function Resume() {
  return (
    <div className="resume-container">
      <PersonalDetail />
      <Education />
      <WorkExperience />
    </div>
  );
}

export default Resume;
