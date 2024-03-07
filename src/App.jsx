import './css/App.css';
import { useState } from 'react';
import Resume from './components/Resume';
import EditSidebar from './components/EditSidebar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [personalData, setPersonalData] = useState({
    name: 'John Doe',
    email: 'Example123@email.com',
    phone: '123-456-7890',
  });
  const [education, setEducation] = useState([
    {
      id: uuidv4(),
      name: 'Penn State University',
      degree: 'Bachelor of Computer Science',
      startDate: '8/2020',
      endDate: '5/2024',
    },
  ]);
  const [work, setWork] = useState([
    {
      id: uuidv4(),
      name: 'ACME',
      title: 'Tester',
      details: '',
      startDate: '08/2022',
      endDate: '06/2023',
    },
  ]);

  function onPersonalSubmit(newData) {
    setPersonalData(newData);
  }

  return (
    <div className="app-container">
      <EditSidebar
        onPersonalSubmit={onPersonalSubmit}
        education={education}
        setEducation={setEducation}
        work={work}
        setWork={setWork}
      />
      <Resume personalData={personalData} educationData={education} />
    </div>
  );
}

export default App;
