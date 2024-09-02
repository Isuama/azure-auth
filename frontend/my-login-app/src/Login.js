import React from "react";
import { useMsal } from "@azure/msal-react";

function Login() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance
      .loginPopup()
      .then((response) => {
        console.log(response);
        // You can send the ID token to your backend/APIM for validation
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={handleLogin}
        style={{ padding: "10px", marginTop: "10px" }}
      >
        Login with Azure AD
      </button>
    </div>
  );
}

export default Login;
