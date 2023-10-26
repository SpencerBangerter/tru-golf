import "./App.css";
import SelectClub from "./components/SelectClubFilter/SelectClub";
import ShotTable from "./components/ShotTable";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="background-image"></div>

        <SelectClub></SelectClub>
        <ShotTable></ShotTable>
      </div>
    </Provider>
  );
}
export default App;
