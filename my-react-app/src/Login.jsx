import Home from "./Home";
import { UserContext } from "./UserContext";

function Login() {
  return (
    <UserContext.Provider value="Arjun">
      <Home />
    </UserContext.Provider>
  );
}

export default Login;