/* eslint-disable react/prop-types */
function PersonalDetail({ personalData }) {
  const { name, email, phone } = personalData;
  return (
    <div className="resume-personal">
      <h1>{name}</h1>
      <span>{email}</span>
      <span>{phone}</span>
    </div>
  );
}

export default PersonalDetail;
