import { IconButton, Tooltip } from "@mui/material";

import { Info } from "../assets/svgIcons";
import React from "react";
import styled from "styled-components";

function CardTooltip({ ttText }) {
  return (
    <Tooltip
      title={ttText}
      arrow
      placement="top"
      PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            backgroundColor: "rgb(44, 44, 44, .97)",
            fontSize: "16px",
            borderRadius: "8px",
            padding: "15px",
          },
          "& .MuiTooltip-arrow::before": {
            backgroundColor: "rgb(44, 44, 44, .97)",
          },
        },
      }}
    >
      <StyledIconButton>
        <Info />
      </StyledIconButton>
    </Tooltip>
  );
}

export default CardTooltip;

const StyledIconButton = styled(IconButton)`
  padding: 0;
`;
