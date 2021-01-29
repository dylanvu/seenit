import React from 'react'

const LoginButton = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

function LoginButton(){
    return(
        <button>Login</button>
    );
}

export default LoginButton