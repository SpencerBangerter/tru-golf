import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getUniqueClubs } from "./Filtering";
import { filterShots, clearFilteredShots } from "../../app/slice/shotDataSlice";
function SelectClub() {
  const dispatch = useDispatch();
  const [selectedClub, setSelectedClub] = useState([]);
  const shots = useSelector((state) => state.shotData.shotData);

  // todo: sort clubs by standard distances, remove unused clubs from options.
  let clubFilterOptions = getUniqueClubs(shots).sort((a, b) =>
    ("" + a).localeCompare(b, undefined, { numeric: true })
  );

  const handleChange = (event) => {
    if (event.target.value.includes("Clear")) {
      setSelectedClub([]);
      dispatch(clearFilteredShots());
      return;
    }
    setSelectedClub(event.target.value);
  };

  useEffect(() => {
    dispatch(filterShots(selectedClub));
  }, [selectedClub, dispatch]);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="club-filter-label">Filter Club</InputLabel>
        <Select
          labelId="club-filter-label"
          id="club-filter"
          value={selectedClub}
          label="Filter By Club"
          onChange={handleChange}
          multiple
        >
          {clubFilterOptions.map((club) => (
            <MenuItem key={club} value={club}>
              {club.replace(/([A-Z])/g, " $1").trim()}
            </MenuItem>
          ))}
          <MenuItem key={"clear"} value={"Clear"} onChange={handleChange}>
            Clear
          </MenuItem>
        </Select>
        <FormHelperText>Select Clubs To View</FormHelperText>
      </FormControl>
    </div>
  );
}
export default SelectClub;
