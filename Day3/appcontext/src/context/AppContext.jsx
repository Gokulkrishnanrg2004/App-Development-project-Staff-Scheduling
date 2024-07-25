import React, { Children, createContext, useCallback, useContext, useState } from 'react'

const GlobalContext = createContext();
export const useGlobalContext = ()=>useContext(GlobalContext);

function Appcontext({children}) {

    const[name,setName] = useState("Gokul")

  return (
    <GlobalContext.Provider value={{name,setName}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default Appcontext