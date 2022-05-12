import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import DataTable from './component/DataTable';
import DataForm from './component/DataForm';

function App() {
  return (
   
   <div className="App">

        <Routes>
          <Route path='/dataform' element={<DataForm/>} />
          <Route path='/datatable' element={<DataTable/>} />
        </Routes>
  
    </div>
  );
}

export default App;


