import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/Emptable';
import AddEmployee from './components/Addemp';
import EditEmployee from './components/Editemp';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
  );
}

export default App;










// import './App.css'
// import Status from './components/Status'
// function App() {

//   return (
//     <>
   

//     </>
//   )
// }

// export default App
