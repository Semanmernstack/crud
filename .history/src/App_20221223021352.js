import List from "./List";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Details from "./Details";
import Create from "./Create";
import Edit from "./Edit";



function App() {
  return (
    <div className="">
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<List/>}> </Route>
        <Route path="/employee/create" element={<Create/>}> </Route>
        <Route path="/employee/details/:empid" element={<Details/>}> </Route>
        <Route path="/employee/edit/:empid" element={<Edit/>}> </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
