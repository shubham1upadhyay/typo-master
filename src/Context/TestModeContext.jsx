import { useContext,createContext, useState } from "react";


const TestModeContext = createContext()
//default props - childrens props
export const TestModeContextProvider = ({children})=>{


    const [testTime,setTestTime] = useState(15)

    const values = {
        testTime,
        setTestTime
    }

    return(<TestModeContext.Provider value={values}>{children}</TestModeContext.Provider>)
}

export const useTestMode = () => useContext(TestModeContext)