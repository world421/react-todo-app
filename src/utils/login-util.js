// 로그인 한 유저의 데이터 객체를 반환하는 함수

export const getLoginUserInfo = () => {
  return {
    token: localStorage.getItem('ACCESS_TOKEN'),
    userName: localStorage.getItem('LOGIN_USERNAME'),
    role: localStorage.getItem('USER_ROLE'),
  };
};

// 로그인 여부를 확인하는 함수
// const isLogin  = () =>{
//     const token = localStorage.getItem('ACCESS_TOKEN');
//     if(token === null ) return false;
//     return true;
// }

// 특정 값이나 메서드의 리턴값을 논리타입을 변환하고자 할 때 !! 를 붙임
// localStorage.getItem 의 결과를 논리ㅏ타입으로 리턴 -> 값이 있으면 true ,
//null이면 false 로 리턴
export const isLogin = () => !!localStorage.getItem('ACCESS_TOKEN');
// "토근이 있으면 true
//!! 있으면 논리값 표현 "
