import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "11d892f3-10de-4fe4-83bb-0c446cefe2a2",
    authority:
      "https://login.microsoftonline.com/6ffc01c8-1e2d-48bd-80d2-b17a054e8cd9",
    redirectUri: "http://localhost:3010",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
