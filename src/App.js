import "./App.css";
import "./LoginPageStyle.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DataTable from "./component/DataTable";
import DataTableRejected from "./component/DataTableRejected";
import DataForm from "./component/DataForm";
import NewDataFormAdd from "./component/newDataFromAdd";
import Drawer from "./component/Drawer";
import TopDiv from "./component/TopDiv";
import DataFormRejected from "./component/DataFormRejected";
import LoginPage from "./component/LoginPage";

function App() {
  return (
    <div className="App">
      <Drawer />
      <TopDiv/>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
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
