/* eslint-disable react/prop-types */
function WorkExperience({ work }) {
  return (
    <div className="work-container">
      {work.map((item) => {
        return (
          <div key={item.id} className="resume-work">
            <span>{`${item.startDate} - ${item.endDate}`}</span>
            <span>{item.name}</span>
            <span>{item.title}</span>
            <p>{item.details}</p>
          </div>
        );
      })}
    </div>
  );
}

export default WorkExperience;
