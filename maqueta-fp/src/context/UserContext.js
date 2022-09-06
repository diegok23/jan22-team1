import React, {useState} from 'react'
const Context = React.createContext({})

export function UserContextProvider ({children}){
    const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'))
    
    const [id, setID] = useState(null)

    return <Context.Provider value={{jwt,id, setJWT, setID}}>
        {children}
    </Context.Provider>
}

export default Context;