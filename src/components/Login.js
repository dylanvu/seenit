import React from 'react'
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

function Login(props) {

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully! Welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
    props.setLoggedIn(true);
    props.setGoogleObj(res.profileObj);
    // props.setName(res.profileObj.name);
    // props.setURL(res.profileObj.imageUrl);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login 😢. Please try again`
    );
  };

  //TODO: check if user exist in the data base, if not, add user to the data base
  //maybe we don't need this?
  /*
  const addUser = (res) => {
    database.ref(`/users/${res.profileObj.googleId}/userInfo`).push(
      {
        email = res.profileObj.email,
        familyName = res.profileObj.familyName,
        givenName: res.profileObj.givenName,
        googleId = res.profileObj.googleId,
        imageUrl = res.profileObj.imageUrl,
        name = res.profileObj.name,
      }
    )
  }
  */
  
  return (

    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;

// Possible methods from login: (from react-google-login, the use-google-login.js)

// res.googleId = basicProfile.getId()
// res.tokenObj = authResponse
// res.tokenId = authResponse.id_token
// res.accessToken = authResponse.access_token
// res.profileObj = {
//   googleId: basicProfile.getId(),
//   imageUrl: basicProfile.getImageUrl(),
//   email: basicProfile.getEmail(),
//   name: basicProfile.getName(),
//   givenName: basicProfile.getGivenName(),
//   familyName: basicProfile.getFamilyName()
// }