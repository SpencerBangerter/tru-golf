import "./App.css";
import SelectClub from "./components/SelectClubFilter/SelectClub";
import ShotTable from "./components/ShotTable";

function App() {
  return (
    <div className="App">
            <div className="background-image"></div>

      <SelectClub></SelectClub>
      <ShotTable></ShotTable>
    </div>
  );
}
export default App;
