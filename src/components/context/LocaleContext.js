import React, {useState} from 'react';

export const LocaleContext = React.createContext();

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState("en");
    const setLanguage = (language)=>setLocale(language);
    return (
      <LocaleContext.Provider value={{locale, setLanguage}}>
        {children}
      </LocaleContext.Provider>
    );
};

