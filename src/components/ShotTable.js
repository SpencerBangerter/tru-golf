import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setShotData } from "../app/slice/shotDataSlice";
import { getShots } from "../api/shots";
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
} from "@mui/material";
import styled from "styled-components";
import ShotModalContents from "./ShotModalContents";

function ShotTable() {
  const [showShotModal, setShowShotModal] = useState(false);
  const [selectedShot, setSelectedShot] = useState();
  //select shots from redux
  const shots = useSelector((state) => state.shotData.filteredShots);

  //This fires on page load, getting all the users shots and setting them to Redux, which is then used to populate the table.
  useEffect(() => {
    async function fetchShots() {
      const userShots = await getShots();
      setShotData(userShots);
    }
    fetchShots();
  }, []);

  const handleCloseModal = () => {
    setShowShotModal(false);
    setSelectedShot();
  };
  return (
    <>
      {
        //I'd like to add pagination here if I have enough time. Id also like to add a styling for every other row to get a slightly different background color
      }
      <TableContainer component={Paper} sx={{ width: "85%", margin: "auto" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <StyledHeader>
            <TableRow>
              <HeaderCell>Hole</HeaderCell>
              <HeaderCell align="left">Shot</HeaderCell>
              <HeaderCell align="left">Club</HeaderCell>
              <HeaderCell align="left">Total Distance</HeaderCell>
              <HeaderCell align="left">Carry Distance</HeaderCell>
              <HeaderCell align="left">Head Speed (mph)</HeaderCell>
              <HeaderCell align="left">Ball Speed (mph) </HeaderCell>
              <HeaderCell align="left">Backspin (rpm)</HeaderCell>
              <HeaderCell align="left">Launch Angle</HeaderCell>
            </TableRow>
          </StyledHeader>
          <TableBody>
            {
              // something I'd like to try and fit in, but is a "bonus" will be an accordion dropdown for each hole that contains each shot for that hole.
              // when a user selects a filter option that isnt "all" it will only show all shots with that club, with no hole accordions
            }
            {shots.map((row) => (
              <StandardRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => {
                  setSelectedShot(row.shotIndex);
                  setShowShotModal(true);
                }}
              >
                <TableCell component="th" scope="row">
                  {row.courseHoleIndex + 1}
                </TableCell>
                {
                  //Another thing to fit in If I can is a little icon on the shots that hole out, putts or chips, etc to clearly show that the shot was a hole ending shot.
                }
                <TableCell align="left">{row.shotIndex + 1}</TableCell>
                <TableCell align="left">
                  {row.clubTypeKey.replace(/([A-Z])/g, " $1").trim()}
                </TableCell>
                {
                  //Distances are not stored in yards/feet explicitly, so i'm making an assumption that they are in feet, due to the 700+ numbers in the drive column. And the yardages for the other clubs seem insane if they are in yards.
                  // it seems wildy improbable that a golfer would be getting putts in the 12+ yard range and then making them
                  // also, i wish i could have a round of not a single 2 putt and multiple chip ins assuming im reading the data left.
                }

                <TableCell align="left">
                  {row.clubTypeKey !== "Putter"
                    ? (row.totalDistance / 3).toFixed(1) + " (yds)"
                    : row.totalDistance.toFixed(1) + " (ft)"}
                </TableCell>
                {
                  //Some instances of data did not have a carry distance, so this is a quick fix to prevent the app from crashing
                  //and displaying errors. I'm not sure what a product team would want to have happen here.
                  //You could potentially just use the total distance since it seems to only be on close wedge shots or putts. Which is what I chose.
                }
                <TableCell align="left">
                  {row.clubTypeKey === "Putter" || row.carryDistance === null
                    ? row.totalDistance?.toFixed(1) + " (feet)"
                    : row.carryDistance
                    ? (row.carryDistance / 3).toFixed(1) + " (yds)"
                    : (row.totalDistance / 3).toFixed(1) + " (yds)"}
                </TableCell>
                <TableCell align="left">
                  {row.clubHeadSpeed.toFixed(1)}
                </TableCell>
                <TableCell align="left">
                  {row.launchBallSpeed.toFixed(1)}
                </TableCell>
                <TableCell align="left">
                  {row.launchBackSpin.toFixed(0)}
                </TableCell>
                <TableCell align="left">
                  {row.launchAngle.toFixed(0)}&deg;
                </TableCell>
              </StandardRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showShotModal && (
        <Modal
          open={showShotModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledBox>
            <ShotModalContents selectedShot={shots[selectedShot]} />
          </StyledBox>
        </Modal>
      )}
    </>
  );
}

export default ShotTable;

const StyledHeader = styled(TableHead)`
  background-color: #ba2027;
`;

const HeaderCell = styled(TableCell)`
  // I dislike using Important here, but doing it via MUI styling takes a lot more work than I have time for. Id normally set up a module for styling base components from MUI.
  color: white !important;
  font-weight: bold !important;
`;

const StandardRow = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //using styled components like this allows you to set variables into CSS. I use this as an example, not that it needs it here.
  width: ${({ width }) => (width ? width : "75%")};
  background-color: #ffffff;
  box-shadow: 24;
  border-radius: 8px;
  padding: 20px 20px 30px 20px;
  border: 1px solid #000000;
`;
