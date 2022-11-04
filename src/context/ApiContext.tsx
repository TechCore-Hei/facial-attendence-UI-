import React, { createContext, useContext, useState } from 'react';
import axios, { AxiosInstance } from 'axios';
import { ContextType } from '../type';

const DataContext = createContext<ContextType>({
  client: axios.create(),
  isAuthentified: false,
  setIsAuthentified: (status:boolean)=>{}
});

export const useDataProvider = () => useContext(DataContext);

export const DataProvider = ({ children }: any) => {
  const [isAuthentified, setIsAuthentified] = useState<boolean>(false)
  const client: AxiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("heiAdmin-token")}`
    },
    baseURL: 'http://localhost:8080',
  });

  const contextValue = {
    client,
    isAuthentified,
    setIsAuthentified
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
