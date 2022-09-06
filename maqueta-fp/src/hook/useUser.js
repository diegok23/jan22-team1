import Context from "../context/UserContext";
import { useCallback, useContext } from "react";
import loginService from "../static/login";

export default function useUser() {
  const { jwt,setJWT,} = useContext(Context);

  const login = useCallback(
    ({ email, password }) => {
      loginService({ email, password })
        .then(({jwt, id}) => {
          window.sessionStorage.setItem('jwt', jwt)
          setJWT(jwt)  
        })
        .catch((err) => {
          window.sessionStorage.removeItem('jwt')
          console.error(err);
        });
    },
    [setJWT]
  );
  
  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
  };
}
