import React from "react";
import Home from "./components/Home/Home"
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

export default function App (){
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/login" element={ <Login />}/>
      <Route path="/signup" element={ <SignUp/>}/>
    </Routes>
   
    </>
  )
}