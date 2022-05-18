import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import DataTable from './component/DataTable';
import DataForm from './component/DataForm';
import DataFormAdd from './component/DataFormAdd';

function App() {
  return (
   
   <div className="App">
        <Routes>
          <Route path='/dataform' element={<DataForm/>} />
          <Route path='/datatable' element={<DataTable/>} />
          <Route path='/dataformadd' element={<DataFormAdd/>} />
        </Routes>
  
    </div>
  );
}

export default App;


