import Context from "../context/UserContext";
import { useCallback, useContext } from "react";
import loginService from "../static/login";

export default function useUser() {
  const { jwt,id, setJWT, setID} = useContext(Context);

  const login = useCallback(
    ({ email, password }) => {
      loginService({ email, password })
        .then((jwt) => {
          console.log(jwt);
          setJWT(jwt);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
  };
}
