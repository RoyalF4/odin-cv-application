import { useState } from 'react';
import Resume from './components/Resume';
import EditSidebar from './components/EditSidebar';
import './css/reset.css';
import './css/App.css';

function App() {
  const [personalData, setPersonalData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  function onPersonalSubmit(newData) {
    setPersonalData(newData);
  }
  return (
    <div className="app-container">
      <EditSidebar onPersonalSubmit={onPersonalSubmit} />
      <Resume personalData={personalData} />
    </div>
  );
}

export default App;
