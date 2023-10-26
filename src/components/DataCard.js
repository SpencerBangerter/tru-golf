import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import CardTooltip from "./CardTooltip";
import Grid from "@mui/material/Unstable_Grid2";

function DataCard({
  title,
  data,
  units,
  ttText,
  // this is for if you ever needed to change the styling or sizing of this card.
  minheight = "150px",
  maxwidth = "auto",
}) {
  return (
    <Grid xs={6} lg={3}>
      <CardContainer minheight={minheight} maxwidth={maxwidth}>
        <CardHeader>
          <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
          <CardTooltip ttText={ttText} />
        </CardHeader>
        <DataContainer>{data || "N/A"}</DataContainer>
        <UnitFooter>{units}</UnitFooter>
      </CardContainer>
    </Grid>
  );
}
export default DataCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ minheight }) => minheight};
  max-width: ${({ maxwidth }) => maxwidth};
  border-radius: 8px;
  opacity: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: bold !important;
  padding-bottom: 20px;
  background-color: #ba2027;
  color: white;
  padding: 8px 20px;
  border-radius: 8px 8px 0px 0px;
  display: flex;
`;

const DataContainer = styled.div`
  background-color: #ffffff;
  color: black;
  display: flex;
  justify-content: center;
  font-size: 26px;
`;
const UnitFooter = styled.div`
  background-color: #424242;
  color: lightgray;
  padding: 8px;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  justify-content: center;
`;
