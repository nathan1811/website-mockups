import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../App.scss";
import * as XLSX from "xlsx";
import Checkbox from "@mui/material/Checkbox";
import Test from "./Test";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Tesla Cup Holder",
  "Full FSD",
  "Auto Pilot Beta",
  "Heated Seats",
  "Cellular Data",
  "2 years service warranty",
  "Upgraded Battery Pack",
  "Carbon Fiber Spoiler",
  "Extra seat (5 seats)",
  "Tesla Taquila",
  "Cyber Truck Wistle",
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Newpage() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [info, setInfo] = React.useState("");
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const excel = () => {
    setInfo(t("Your order has been submitted"));
    const worksheet = XLSX.utils.json_to_sheet(
      personName.map((name) => ({ name }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Selected Names");
    XLSX.writeFile(workbook, "selected_tesla_parts.xlsx");
  };
  console.log(personName);

  return (
    <div>
      <Test></Test>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          marginTop: "200px",
        }}
      >
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">
            {t("Tesla Parts")}
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          {personName.map((item) => (
            <div style={{ display: "flex", padding: "5px" }}>{item}</div>
          ))}
          <Button
            style={{ marginTop: "15px" }}
            onClick={excel}
            type="submit"
            className="submit"
            variant="contained"
          >
            {t("Submit")}
          </Button>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <p>{info}</p>
          </div>
        </FormControl>
      </div>
    </div>
  );
}
export default Newpage;
