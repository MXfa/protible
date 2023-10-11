import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupIcon from "@mui/icons-material/Group";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
//import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
//import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
//import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
//import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
//import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
//import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
//import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import { styled } from "@mui/system";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isSubMenuCollapsed, setIsSubMenuCollapsed] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const logo =
    theme.palette.mode === "dark"
      ? "../../assets/logoBlanco.png"
      : "../../assets/logoNegro.png";
  const StyledBusinessIcon = styled(BusinessIcon)(({ theme }) => ({
    color: theme.palette.mode === "light" ? "black" : "white",
  }));

  const handleMouseEnter = () => {
    setIsCollapsed(false);
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCollapsed(true);
    setIsSubMenuOpen(false);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="150px"
                  height="150px"
                  src={logo}
                  style={{ cursor: "pointer", borderRadius: "9%" }}
                />

             
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <SubMenu
              title={
                <span
                  style={{
                    color: theme.palette.mode === "light" ? "black" : "white",
                    fontSize: "17px",
                  }}
                >
                  Catálogos
                </span>
              }
              selected={selected}
              label="Charts"
              icon={isCollapsed ? <StyledBusinessIcon /> : undefined}
              style={{
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
              collapsed={isSubMenuCollapsed.toString()}
            >
              <Item
                title="ALMACEN"
                to="/Almacen"
                icon={<CorporateFareIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <br></br>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
export default Sidebar;
