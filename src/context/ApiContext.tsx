import React, { createContext, useContext, useState } from 'react';
import axios, { AxiosInstance } from 'axios';
import { ContextType } from '../type';

const DataContext = createContext<ContextType>({
  client: axios.create(),
});

export const useDataProvider = () => useContext(DataContext);

export const DataProvider = ({ children }: any) => {
  const client: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  });

  const contextValue = {
    client,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
