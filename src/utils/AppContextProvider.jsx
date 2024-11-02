import { createContext} from "react";

export const AppContext = createContext(null);


const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
