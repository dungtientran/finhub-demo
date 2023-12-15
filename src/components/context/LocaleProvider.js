import React, {useState} from 'react'
import LocaleContext from './LocaleContext';

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState("en");
    const setLanguage = (language)=>setLocale(language);
    return (
      <LocaleContext.Provider value={{locale, setLanguage}}>
        {children}
      </LocaleContext.Provider>
    );
  };