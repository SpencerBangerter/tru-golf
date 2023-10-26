import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DataCard from "./DataCard";
import * as CONSTANTS from "../constants/ShotDataTooltips";

function ShotModalContents(selectedShot) {
  const shot = selectedShot.selectedShot;
  return (
    <Grid container spacing={2.5}>
      <DataCard
        title={"Club"}
        ttText={CONSTANTS.CLUB}
        data={shot.clubTypeKey.replace(/([A-Z])/g, " $1").trim()}
        units={
          shot.startedOnTee
            ? "Tee Shot"
            : shot.clubTypeKey === "Putter"
            ? "Putt"
            : shot.endedInHole
            ? "Hole Out"
            : "Approach/Chip"
        }
      />
      <DataCard
        title={"Total Distance"}
        ttText={CONSTANTS.TOTAL_DISTANCE}
        data={
          shot.clubTypeKey !== "Putter"
            ? (shot.totalDistance / 3)?.toFixed(1)
            : shot.totalDistance?.toFixed(1)
        }
        units={shot.clubTypeKey !== "Putter" ? "Yards" : "Feet"}
      />
      <DataCard
        title={"Carry Distance"}
        ttText={CONSTANTS.CARRY_DISTANCE}
        data={
          shot.clubTypeKey !== "Putter"
            ? (shot.carryDistance / 3)?.toFixed(1)
            : shot.carryDistance?.toFixed(1)
        }
        units={shot.clubTypeKey !== "Putter" ? "Yards" : "Feet"}
      />
      <DataCard
        title={"Club Speed"}
        ttText={CONSTANTS.CLUB_HEAD_SPEED}
        data={shot.clubHeadSpeed?.toFixed(1)}
        units={"MPH"}
      />
      <DataCard
        title={"Ball Speed"}
        ttText={CONSTANTS.BALL_SPEED}
        data={shot.launchBallSpeed?.toFixed(1)}
        units={"MPH"}
      />
      <DataCard
        title={"Smash Factor"}
        ttText={CONSTANTS.SMASH_FACTOR}
        data={(shot.launchBallSpeed / shot.clubHeadSpeed).toFixed(2)}
        units={"Higher is Better"}
      />
      <DataCard
        title={"Back Spin"}
        ttText={CONSTANTS.BACK_SPIN}
        data={shot.launchBackSpin?.toFixed(0)}
        units={"RPM"}
      />
      <DataCard
        title={"Side Spin"}
        ttText={CONSTANTS.SIDE_SPIN}
        //IF I have time I'll add a icon which shows direction instead of negative numbers for left and right spin.
        data={shot.launchSideSpin?.toFixed(0)}
        units={"RPM"}
      />
      <DataCard
        title={"Launch Angle"}
        ttText={CONSTANTS.LAUNCH_ANGLE}
        data={shot.launchAngle?.toFixed(2)}
        units={"Degrees"}
      />
      <DataCard
        title={"Launch Direction"}
        ttText={CONSTANTS.LAUNCH_DIRECTION}
        data={shot.LaunchDirection?.toFixed(2)}
        units={"Degrees"}
      />

      <DataCard
        title={"Club Face Angle"}
        ttText={CONSTANTS.CLUB_FACE_ANGLE}
        //Ideally I'd like to have a custom icon that shows a club face open or closed at contact to quickly show the user if they are hitting the ball square or not.
        data={shot.clubFaceAngle?.toFixed(2)}
        units={"Degrees"}
      />

      <DataCard
        title={"Club Path Angle"}
        ttText={CONSTANTS.CLUB_PATH_ANGLE}
        //Ideally I'd like to have a diagonal icon that shows a club path direction and an "in to out" or "out to in" path direction.
        data={shot.clubPathAngle?.toFixed(2)}
        units={"Degrees"}
      />
      <DataCard
        title={"Face to Path"}
        ttText={CONSTANTS.FACE_PATH_ANGLE}
        //Ideally I'd like to have a club icon that shows a club face in relation to path at contact to help diagnose slice/hook problems.
        //This is the calculation according to the E6 Connect Manual: Face to Path = Face Angle - Club Path Angle
        //Will probably show no data, due to CFA and CPA being 0 on all the shots I could see.
        data={shot.clubFaceAngle.toFixed(2) - shot.clubPathAngle?.toFixed(2)}
        units={"Degrees"}
      />
    </Grid>
  );
}

export default ShotModalContents;
