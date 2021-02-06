import React, { useState, useEffect } from 'react';


const useDarkMode = () => {
    const [theme, setTheme] = useState({});

    /* get user Preferencies (Browser) */
    const getPreferencies = () => {
        const themePreference = window.localStorage.getItem('BlogTheme');
        if(themePreference){
            themePreference === 'light' ? setTheme({ active: false, value: 'light' }) : 
            setTheme({ active: true, value: 'dark' });
        }else{ setTheme({ active: false, value: 'light'}) }
    };

    /* Switch Change */
    const toggleTheme = () => {
        if(theme.active) {
            trans(); 
            document.documentElement.setAttribute('data-theme', 'light')
            setTheme({...theme, active: !theme.active, value: 'light'}); 
            window.localStorage.setItem('BlogTheme', 'light');
        } else { 
            trans(); 
            document.documentElement.setAttribute('data-theme', 'dark')
            setTheme({...theme, active: !theme.active, value: 'dark'}); 
            window.localStorage.setItem('BlogTheme', 'dark');
        } 
    };
    
    /* Switch Transition */
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    };
    
    useEffect(() => { getPreferencies() }, []);
  
    return [theme, toggleTheme]
  };

export default useDarkMode;