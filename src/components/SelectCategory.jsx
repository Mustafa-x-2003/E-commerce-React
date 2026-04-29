import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MyContext from "./contexts/MyContext";
import { useState, useContext } from "react";
export default function SelectCategory() {
  const { allCategorys, setCategorys, categorys } = useContext(MyContext);
  const [category, seCategory] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;

    if (value === "all") {
      setCategorys(allCategorys);
      seCategory(value);
    } else {
      seCategory(value);
      setCategorys([value]);
    }
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 90,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--border-color)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--main-color)",
          }
        }}
      >
        <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Filter"
          MenuProps={{
            sx: {
              "& .MuiMenu-paper": {
                height: 500,
                width: 250,
                borderRadius: 2,
                marginTop: 1,
              },
            },
          }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          {allCategorys.map((c) => {
            return <MenuItem value={c}>{c.replace("-", " ")}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
