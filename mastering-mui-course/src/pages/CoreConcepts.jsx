import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { blueTextClass } from "../styles";

import { useState } from "react";
import { blue } from "@mui/material/colors";

const MySpecialBox = (props) => {
  return (
    <Box>
      label: {props.label}
      {props.children}
    </Box>
  );
};

const CoreConcepts = () => {
  return (
    <>
      {/* <Stack spacing={2} direction="row">
        <Button component="a" variant="contained" sx={{ bgcolor: "green" }}>
          Contained
        </Button>
      </Stack>

      <MySpecialBox label="Special Box DD">
        <Button component="a" variant="contained" sx={{ bgcolor: "green" }}>
          Contained
        </Button>
      </MySpecialBox> */}

      {/* boxShadow/dropShadow: 20 -> theme.shadow[20] */}

      {/* <Button
        onClick={() => setOpen(!open)}
        sx={[
          {
            borderColor: (theme) => theme.palette.secondary.main,
            borderStyle: "solid",
            borderWidth: "4px",
            m: "50px",
            // fontSize: "h6.fontSize",
            width: 1,
            maxWidth: "sm",
            boxShadow: (theme) => theme.shadows[20],
            bgcolor: { xs: "green", sm: "purple" },
            zIndex: "modal",
            "&:hover": {
              bgcolor: "orange",
            },
            "& > p": {
              color: "powderblue",
            },
          },
          open && {
            bgcolor: "red",
            fontSize: "2rem",
          },
        ]}
        variant="contained"
      >
        My Button
        <p>My paragraph</p>
      </Button> */}
      <Stack spacing={2} direction="row">
        <Button sx={{ ...blueTextClass }} variant="contained">
          Contained
        </Button>
      </Stack>
    </>
  );
};

export default CoreConcepts;
