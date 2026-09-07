import React, { useContext, createContext} from 'react'

export const Themecontext = createContext({
    themeMode: "light",
    darkTheme : ()=>{},
    lightTheme: ()=>{}

})
export const ThemeProvider = Themecontext
export default function useTheme(){
    return useContext(Themecontext)
}