import { AxiosInstance } from 'axios';

export type ContextType = {
  client?: AxiosInstance,
  isAuthentified: boolean,
  setIsAuthentified: (status:boolean)=>void
};
