import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";


const Topbar = ({handleLogout}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        background= "rgba(0, 0, 0, 0)" 
        borderRadius="5px"
      >
       
        
      </Box>

      {/* ICONS */}
      <Box display="flex">
      <Tooltip title="Cambiar Modo">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        </Tooltip>
        {/*<IconButton>
          <NotificationsOutlinedIcon />
          </IconButton>*/}
        {/*<IconButton>
          <SettingsOutlinedIcon />
          </IconButton>*/}
        <Tooltip title="Cerrar Sesión">
        <IconButton onClick={()=>{
          
          handleLogout()
          navigate("/")
        }}>
          <PersonOutlinedIcon />
        </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Topbar;
