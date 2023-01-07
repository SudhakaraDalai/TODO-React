import React from "react";
function setToken(token, value) {
  if (window.localStorage) {
    return localStorage.setItem(token, value);
  }
}
function getToken(token) {
  if (window.localStorage) {
    return localStorage.getItem(token);
  }
}
function removeToken(token) {
  if (window.localStorage) {
    return localStorage.removeItem(token);
  }
}
export { getToken, setToken, removeToken };
