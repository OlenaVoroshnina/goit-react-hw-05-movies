import { Routes, Route, Navigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";

import { Header } from "./Header/Header";
import { Home } from "pages/Home";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      
      <Routes>
        <Route path="/" element = {<Header/>}>
          <Route index element = {<Home/>}/>
          <Route path="/movies"/>
        </Route>
        <Route path = '*' element = {<Navigate to = '/' />}/>
        
      </Routes>
      {/* <Outlet/> */}
    </div>
  );
};
