import { useState } from 'react';
import AddWork from './AddWork';

function EditWork() {
  const [showAddWork, setShowAddWork] = useState(true);

  function handleNewWork(work) {
    setShowAddWork(false);
  }
  return (
    <div className="edit-work-container">
      {showAddWork && <AddWork handleNewWork={handleNewWork} />}
    </div>
  );
}

export default EditWork;
