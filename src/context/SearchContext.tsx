import React, { createContext, useContext, useState } from 'react'

interface ContextProps{
  searchValue: string | undefined;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setSearchValue: Function;
}

const Context = createContext<ContextProps>({} as ContextProps)


export const SearchContext: React.FC = (props) => {
  const [ searchValue, setSearchValue] = useState<string>()
  return(
    <Context.Provider 
      value={{
        searchValue,
        setSearchValue
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default function useSearchContext():ContextProps{
  const context = useContext(Context)

  const { searchValue, setSearchValue } = context
  return {
    searchValue,
    setSearchValue
  }
}
