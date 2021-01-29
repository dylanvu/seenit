import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID //insert client id here

function Logout(props) {

    const onSuccess = () => {
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
        props.setLoggedIn(false);
    };

    return (
        <div>
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        ></GoogleLogout>
    </div>
    );
}

export default Logout;