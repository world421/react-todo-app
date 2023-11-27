import React, { Fragment } from 'react';
import TodoTemplate from './components/todo/TodoTemplate';
import './App.css';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Join from './components/user/Join';
import Login from './components/user/Login';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* 경로에 따라 컴포넌트 렌더링 ~ 
    라우터가 인식해서 연결해주겠다,
  
    */}
      <Header />
      <Routes>
        <Route
          path='/'
          element={<TodoTemplate />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='join'
          element={<Join />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
