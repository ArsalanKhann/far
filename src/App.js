import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DataTable from "./component/DataTable";
import DataTableRejected from "./component/DataTableRejected";
import DataForm from "./component/DataForm";
import DataFormAdd from "./extra/DataFormAdd";
import NewDataFormAdd from "./component/newDataFromAdd";
import Drawer from "./component/Drawer";
import DataFormRejected from "./component/DataFormRejected";

function App() {
  return (
    <div className="App">
      <Drawer />
      <Routes>
        <Route path="/dataform" element={<DataForm />} />
        <Route path="/dataformrejected" element={<DataFormRejected />} />
        <Route path="/datatable" element={<DataTable />} />
        <Route path="/datatablerejected" element={<DataTableRejected />} />
        <Route path="/dataformadd" element={<NewDataFormAdd sortBy="newest" />} />
        <Route exact path="/linkexpired" component={NewDataFormAdd} />
      </Routes>
    </div>
  );
}

export default App;
