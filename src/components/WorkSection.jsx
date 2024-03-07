/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddWork from './AddWork';
import Work from './Work';
import EditWork from './EditWork';

function WorkSection({ work, setWork }) {
  const [showAddWork, setShowAddWork] = useState(true);
  const [showList, setShowList] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editId, setEditId] = useState();

  function handleNewWork(newWork) {
    setWork([
      ...work,
      {
        ...newWork,
        id: uuidv4(),
      },
    ]);
    setShowAddWork(false);
    setShowList(true);
  }

  function handleEditWork(edit) {
    setWork(
      work.map((item) => {
        if (item.id === edit.id) {
          return {
            id: edit.id,
            name: edit.name,
            title: edit.title,
            details: edit.details,
            startDate: edit.startDate,
            endDate: edit.endDate,
          };
        } else {
          return item;
        }
      })
    );
    console.log(work);
    setShowEdit(false);
    setShowList(true);
  }

  function handleDelete(id) {
    setWork(work.filter((item) => id !== item.id));
  }

  function onClickEdit(id) {
    setEditId(id);
    setShowEdit(true);
    setShowList(false);
  }

  return (
    <div className="edit-work-container">
      {showAddWork && <AddWork handleNewWork={handleNewWork} />}
      {showEdit && (
        <EditWork onSubmit={handleEditWork} work={work} id={editId} />
      )}
      {showList &&
        work.map((item) => (
          <Work
            key={item.id}
            id={item.id}
            name={item.name}
            onEdit={onClickEdit}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
}

export default WorkSection;
