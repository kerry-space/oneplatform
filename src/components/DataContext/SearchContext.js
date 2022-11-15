import React,{useState, createContext} from 'react';

export  const SearchContext = createContext();


const SearchProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");





  return (
    <SearchContext.Provider value={{searchTerm,setSearchTerm}}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
