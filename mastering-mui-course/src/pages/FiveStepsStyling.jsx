import React from "react";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { autocompleteClasses } from "@mui/material";

import { Autocomplete, TextField, Paper } from "@mui/material";

const CustomPaper = (props) => {
  const { sx, ...otherProps } = props;
  return (
    <Paper
      {...otherProps}
      sx={{
        ...sx,
        bgcolor: "purple",
        [`& .${autocompleteClasses.option}`]: {
          color: "#FFF",
          fontFamily: "Verdana",
          fontSize: "1rem",
        },
        // [`& .${autocompleteClasses.groupLabel}`]: {
        //   bgcolor: "#000",
        //   color: "#FFF",
        // },
      }}
    >
      {props.children}
    </Paper>
  );
};

const FiveStepsStyling = () => {
  const [value, setValue] = useState([]);
  const options = ["Apple", "Banana", "Pear", "Orange"];
  return (
    <>
      {/* <FormControl disabled>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{
            "& .MuiFormControlLabel-label": {
              color: "red",
              fontFamily: "Verdana",
              fontSize: "1.5rem",
            },
            "& .MuiRadio-root": {
              "&.Mui-checked": { color: "red" },
              "&.Mui-disabled": {
                color: "#343434",
              },
            },
          }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl> */}

      <Autocomplete
        multiple
        // open
        value={value}
        ChipProps={{
          sx: {
            bgcolor: "green",
            "& .MuiChip-label": {
              color: "#FFF",
              fontFamily: "Verdana",
              fontSize: "1.5rem",
            },
          },
        }}
        PaperComponent={CustomPaper}
        onChange={(event, newValue) => setValue(newValue)}
        options={options}
        renderInput={(params) => <TextField {...params} label="Fruit" />}
      />
    </>
  );
};

export default FiveStepsStyling;
