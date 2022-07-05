import Routers from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import { setAuthToken } from './helpers/setAuthToken'

function App() {

  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <Routers />
  );
}

export default App;