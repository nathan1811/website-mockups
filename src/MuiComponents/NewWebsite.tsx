import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import Box from "@mui/material/Box";
import Test from "./Test1.tsx";

import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React, { useState, ChangeEvent } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type DataItem = {
  name: string;
  description: string;
  jsxCode: string;
  playGround: string;
  contact: string;
  test: string;
};

type DataItem2 = {
  name: string;
};

type DataItem3 = {
  name: string;
  description: string;
};
const data: DataItem[] = [
  {
    name: "AutoComplete",
    description:
      "The autocomplete is a normal text input enhanced by a panel ofsuggested options",
    jsxCode: `import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
 
export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}`,

    playGround: `import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
 
export default function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };
  const [value, setValue] = React.useState<FilmOptionType | null>(null);
 
  return (
    <Stack spacing={1} sx={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} label="disableCloseOnSelect" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="clearOnEscape" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="disableClearable" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="include-input-in-list"
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="includeInputInList" variant="standard" />
        )}
      />
      <Autocomplete
        {...flatProps}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="flat" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={value}
        onChange={(event: any, newValue: FilmOptionType | null) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="controlled" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="autoComplete" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-list-wrap"
        disableListWrap
        renderInput={(params) => (
          <TextField {...params} label="disableListWrap" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="open-on-focus"
        openOnFocus
        renderInput={(params) => (
          <TextField {...params} label="openOnFocus" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-highlight"
        autoHighlight
        renderInput={(params) => (
          <TextField {...params} label="autoHighlight" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-select"
        autoSelect
        renderInput={(params) => (
          <TextField {...params} label="autoSelect" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disabled"
        disabled
        renderInput={(params) => (
          <TextField {...params} label="disabled" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-portal"
        disablePortal
        renderInput={(params) => (
          <TextField {...params} label="disablePortal" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="blur-on-select"
        blurOnSelect
        renderInput={(params) => (
          <TextField {...params} label="blurOnSelect" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="clear-on-blur"
        clearOnBlur
        renderInput={(params) => (
          <TextField {...params} label="clearOnBlur" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="select-on-focus"
        selectOnFocus
        renderInput={(params) => (
          <TextField {...params} label="selectOnFocus" variant="standard" />
        )}
      />
      <Autocomplete
        {...flatProps}
        id="readOnly"
        readOnly
        defaultValue={flatProps.options[13]}
        renderInput={(params) => (
          <TextField {...params} label="readOnly" variant="standard" />
        )}
      />
    </Stack>
  );
}`,
    contact: "+91-771-806-9086",
    test: "a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use:",
  },
  {
    name: "Button",
    description:
      "Buttons allow users to take actions, and make choices, with a single tap.",
    jsxCode: `import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 
export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}`,
    playGround: `import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
 
export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  );
}
`,
    contact: "+91-9837163547",
    test: "a short written or spoken examination of a person's proficiency or knowledge:",
  },

  {
    name: "CheckBox",
    description:
      "Checkboxes allow the user to select one or more items from a set.",
    jsxCode: `import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
 
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 
export default function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
}
`,

    playGround: `import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
 
export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);
 
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
 
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };
 
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
 
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
 
  return (
    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}
`,
    contact: "+91-898926487",
    test: "an event or situation that reveals the strength or quality of someone or something by putting them under strain:",
  },

  {
    name: "RadioGroup",
    description:
      "The Radio Group allows the user to select one option from a set.",
    jsxCode: `import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
 
export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}`,
    playGround: `import * as React from 'react';
import Radio from '@mui/material/Radio';
 
export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');
 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
 
  return (
    <div>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    </div>
  );
}
`,
    contact: "+91-9977274352",
    test: "an examination of part of the body or a body fluid for medical purposes, especially by means of a chemical or mechanical procedure rather than simple inspection:",
  },

  {
    name: "Rating",
    description:
      "Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.",
    jsxCode: `import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
 
export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);
 
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}
`,
    playGround: `import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
 
const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
 
 
export default function HoverRating() {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);
 
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
`,
    contact: "+91-9284718402",
    test: "a procedure employed to identify a substance or to reveal the presence or absence of a constituent within a substance.",
  },

  {
    name: "Select",
    description:
      "Select components are used for collecting user provided information from a list of options.",
    jsxCode: `import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
 
export default function BasicSelect() {
  const [age, setAge] = React.useState('');
 
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
 
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
`,
    playGround: `import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
 
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
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
 
function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
 
export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
 
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
 

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
`,
    contact: "+91-1234567890",
    test: "a means of establishing whether an action, item, or situation is an instance of a specified quality, especially one held to be undesirable:",
  },

  {
    name: "Slider",
    description:
      "Sliders allow users to make selections from a range of values.",
    jsxCode: `import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
 
export default function ContinuousSlider() {
  const [value, setValue] = React.useState<number>(30);
 
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
 
  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}
`,
    playGround: `import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
 
 
 
export default function InputSlider() {
  const [value, setValue] = React.useState(30);
 
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };
 
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
 
  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`,
    contact: "+91-0987654321",
    test: "take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice:",
  },

  {
    name: "Switch",
    description: "Switches toggle the state of a single setting on or off.",
    jsxCode: `import * as React from 'react';
import Switch from '@mui/material/Switch';
 
const label = { inputProps: { 'aria-label': 'Switch demo' } };
 
export default function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
}
`,
    playGround: `import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
 
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
     
 
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
   
 
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
 
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
 
export default function CustomizedSwitches() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="MUI switch"
      />
      <FormControlLabel
        control={<Android12Switch defaultChecked />}
        label="Android 12"
      />
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label="iOS style"
      />
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>On</Typography>
      </Stack>
    </FormGroup>
  );
}
`,
    contact: "+91-5678901234",
    test: "give (someone) a short written or oral examination of their proficiency or knowledge:",
  },

  {
    name: "Text Field",
    description: "Text Fields let users enter and edit text.",
    jsxCode: `import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
 
export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}
`,
    playGround: `import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
 
export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);
 
  const handleClickShowPassword = () => setShowPassword((show) => !show);
 
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
 
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />

    </FormControl>
      </div>
      <div>
        <TextField
          label="With normal TextField"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          variant="filled"
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <FilledInput
            id="filled-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
      <div>
        <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          variant="standard"
        />
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
    </Box>
  );
}
`,
    contact: "+91-1029384756",
    test: "judge or measure (someone's proficiency or knowledge) by means of a test:",
  },

  {
    name: "Toggle Button",
    description: "A Toggle Button can be used to group related options.",
    jsxCode: `import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
 
export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>('left');
 
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };
 
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`,
    playGround: `import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
 
export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);
 
  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
`,
    contact: "+91-5647382910",
    test: "late Middle English (denoting a cupel used to treat gold or silver alloys or ore): via Old French from Latin testu, testum ‘earthen pot’, variant of testa ‘jug, shell’. Compare with test. The verb dates from the early 17th century.",
  },
];

const data3 = `
                                  Material UI
           
Material UI is an open-source React component library that implements Google's Material Design.
It's comprehensive and can be used in production out of the box.
       
                                  Introduction
Material UI is an open-source React component library that implements Google's Material Design.
It includes a comprehensive collection of prebuilt components that are ready for use in production
right out of the box, and features a suite of customization options that make it easy to implement
your own custom design system on top of our components.
           
 
                              Advantages of Material UI
 
           
Ship faster: Over 2,500 open-source contributors have poured countless hours into these components.
Focus on your core business logic instead of reinventing the wheel—we've got your UI covered.
           
Beautiful by default: We're meticulous about our implementation of Material Design, ensuring that
every Material UI component meets the highest standards of form and function, but diverge from the
official spec where necessary to provide multiple great options.
           
Customizability: The library includes an extensive set of intuitive customizability features. The templates
in our store demonstrate how far you can go with customization.
           
Cross-team collaboration: Material UI's intuitive developer experience reduces the barrier to entry for
back-end developers and less technical designers, empowering teams to collaborate more effectively. The design
kits streamline your workflow and boost consistency between designers and developers.
           
Trusted by thousands of organizations: Material UI has the largest UI community in the React ecosystem. It's
almost as old as React itself—its history stretches back to 2014—and we're in this for the long haul. You can count
on the community's support for years to come (for example Stack Overflow).`;

const data2: DataItem2[] = [
  { name: "Playground" },
  { name: "Contact" },
  { name: "Test" },
];

function NewWebsite() {
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);
  const [selectedItem1, setSelectedItem1] = useState<DataItem2 | null>(null);
  const [enable, setEnable] = useState(false);
  const [zoom, setZoom] = useState(1);

  const navigate = useNavigate();

  // const { t, i18n } = useTranslation('ns1');
  const [inputValue, setInputValue] = useState("");
  const text = data3;
  const getHightlightedText = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text);

  return (
    <div>
      <Test></Test>
      <div
        style={{
          height: "100%",
          transform: `scale(${zoom})`,
          transformOrigin: "top left",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            color: "black",
            display: "flex",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          Material UI - Overview
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "450px 1fr 250px",
            height: "100%",
            backgroundColor: "rgb(245 245 245)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateRows: "repeat(11, 30px)",
              padding: "40px",
              gap: "20px",
              alignItems: "center",
              color: "black",
              borderRight: "1px solid",
            }}
          >
            {data.map((item) => (
              <div
                style={{ cursor: "pointer", fontSize: "18px" }}
                onClick={() => setSelectedItem(item)}
              >
                {
                  <div
                    style={{ color: selectedItem == item ? "blue" : "black" }}
                  >
                    {item.name}
                  </div>
                }
              </div>
            ))}
          </div>
          {selectedItem ? (
            <div style={{ padding: "60px", color: "black" }}>
              <h2>{selectedItem.name}</h2>

              <p>{selectedItem.description}</p>
              <div style={{ color: "black" }}>
                <pre>
                  <code>{selectedItem.jsxCode}</code>
                </pre>
              </div>
              {selectedItem1?.name == "Playground" && enable && (
                <div>
                  <div style={{ fontSize: "18px" }}> PlayGround</div>
                  <pre>
                    {" "}
                    <code>
                      {data
                        .filter((item) => item?.name == selectedItem.name)
                        .map((item) => (
                          <div>{item.playGround}</div>
                        ))}
                    </code>
                  </pre>{" "}
                </div>
              )}

              {selectedItem1?.name == "Contact" && enable && (
                <div>
                  <div style={{ fontSize: "18px" }}> Contact</div>

                  {data
                    .filter((item) => item?.name == selectedItem.name)
                    .map((item) => (
                      <div>{item.contact}</div>
                    ))}
                </div>
              )}
              {selectedItem1?.name == "Test" && enable && (
                <div>
                  <div style={{ fontSize: "18px" }}> Test</div>

                  {data
                    .filter((item) => item?.name == selectedItem.name)
                    .map((item) => (
                      <div>{item.test}</div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <div style={{ padding: "40px", color: "black", fontSize: 18 }}>
              <div>
                <TextField
                  type="text"
                  variant="standard"
                  value={inputValue}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.currentTarget.value)
                  }
                ></TextField>
                <p>
                  <pre>
                    <code>{getHightlightedText(text, inputValue)}</code>
                  </pre>
                </p>
              </div>

              <Button
                size="medium"
                variant="contained"
                onClick={() => navigate("/update")}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "5px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  alignItems: "center",
                  backgroundColor: "#103566",
                }}
              >
                Animals
              </Button>
            </div>
          )}
          {selectedItem && (
            <div
              style={{
                borderLeft: "1px solid",
                display: "grid",
                gridTemplateRows: "repeat(5, 30px)",
                padding: "40px",
                gap: "5px",
              }}
            >
              {data2.map((item) => (
                <div
                  style={{ cursor: "pointer", fontSize: "18px" }}
                  onClick={() => {
                    setEnable(!enable);
                    setSelectedItem1(item);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewWebsite;
