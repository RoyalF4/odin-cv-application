import Resume from './components/Resume';
import EditSidebar from './components/EditSidebar';
import './css/reset.css';
import './css/App.css';

function App() {
  return (
    <div className="app-container">
      <EditSidebar />
      <Resume />
    </div>
  );
}

export default App;
