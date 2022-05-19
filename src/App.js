import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DataTable from "./component/DataTable";
import DataForm from "./component/DataForm";
import DataFormAdd from "./component/DataFormAdd";
import NewDataFormAdd from "./component/newDataFromAdd";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dataform" element={<DataForm />} />
        <Route path="/datatable" element={<DataTable />} />
        {/* <Route path='/dataformadd' element={<DataFormAdd/>} /> */}

        {/* <Route path="/dataformadd" element={<NewDataFormAdd /> } /> */}
        <Route
          path="/dataformadd"
          element={<NewDataFormAdd sortBy="newest" />}
        />

        <Route exact path="/linkexpired" component={NewDataFormAdd} />
      </Routes>
    </div>
  );
}

export default App;
