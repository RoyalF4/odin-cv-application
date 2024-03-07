/* eslint-disable react/prop-types */
function EducationInfo({ education }) {
  console.log(education);
  return (
    <div>
      {education.map((item) => {
        return (
          <div key={item.id} className="resume-education">
            <span>{`${item.startDate} - ${item.endDate}`}</span>
            <span>{item.name}</span>
            <span>{item.degree}</span>
          </div>
        );
      })}
    </div>
  );
}
export default EducationInfo;
