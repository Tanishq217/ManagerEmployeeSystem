import React, { useEffect } from 'react';
import { getLocalStorage } from '../utils/localstorage';

const AuthContext = ({ children }) => {
  // any context logic if needed

  return (
    <div>
      {children}
    </div>
  );
};

export default AuthContext;
