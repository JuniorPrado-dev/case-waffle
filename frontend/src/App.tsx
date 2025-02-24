import { Provider } from "react-redux";
import Routers from "./routers/Routers";
import {store} from "./redux/store";
// import UserForm from "./components/UserForm";

function App() {
  return (
    <Provider store={store}>
      <Routers />
      {/* <UserForm></UserForm> */}
    </Provider>
  );
}

export default App;
