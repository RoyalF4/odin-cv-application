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
      name: 'Example University',
      degree: 'Bachelors in Slacking Off',
      startDate: '8/2020',
      endDate: 'present',
    },
  ]);
  const [work, setWork] = useState([
    {
      id: uuidv4(),
      name: 'ACME',
      title: 'Tester',
      details:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet reiciendis neque facilis, adipisci doloribus nam voluptatem laborum asperiores beatae? Suscipit?',
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
      <Resume personal={personalData} education={education} work={work} />
    </div>
  );
}

export default App;
