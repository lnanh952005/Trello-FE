import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode || "light"}
        label="mode"
        onChange={(event) => setMode(event.target.value)}
      >
        <MenuItem value={"light"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <LightModeIcon fontSize="small" />
            <span>Light</span>
          </Box>
        </MenuItem>
        <MenuItem value={"dark"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <DarkModeIcon fontSize="small" />
            <span>Dark</span>
          </Box>
        </MenuItem>
        <MenuItem value={"system"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <SettingsBrightnessIcon fontSize="small" />
            <span>System</span>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

const App = () => {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  // console.log({ prefersDarkMode, prefersLightMode });
  return (
    <div>
      <ModeSelect />
      <Button>Hello</Button>
      <Typography variant="body2" color="text.secondary">
        adgag
      </Typography>
    </div>
  );
};

export default App;
