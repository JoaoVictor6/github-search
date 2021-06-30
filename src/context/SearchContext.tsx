import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  searchValue: string;
  setSearchValue: (arg: string) => void;
}

const Context = createContext<ContextProps>({} as ContextProps);

export const SearchContext: React.FC = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <Context.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default function useSearchContext(): ContextProps {
  const context = useContext(Context);

  const { searchValue, setSearchValue } = context;
  return {
    searchValue,
    setSearchValue,
  };
}
