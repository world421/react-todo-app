import TodoTemplate from './components/todo/TodoTemplate';
import './App.css';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Join from './components/user/Join';
import Login from './components/user/Login';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './utils/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './utils/Test';
import KakaoLoginHandler from './components/user/KakaoLoginHandler';

const App = () => {
  return (
    // 데이터를 전달하고자 하는 자식 컴포넌트들을 Provider로 감쌉니당.
    <AuthContextProvider>
      <div className='wrapper'>
        {/* 경로에 따라 컴포넌트 렌더링 ~ 
    라우터가 인식해서 연결해주겠다, */}
        <Header />
        <div className='content-wrapper'>
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
            <Route
              path='/*'
              element={<Test />}
            />
            <Route
            path='/oauth/redirected/kakao'
            element={<KakaoLoginHandler/>} // 얘를 렌더링해줘
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthContextProvider>
  );
};

export default App;
