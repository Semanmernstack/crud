import List from "./List";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  return (
    <div className="">
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<List/>}> </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
