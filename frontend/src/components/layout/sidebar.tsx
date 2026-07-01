import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportIcon from "@mui/icons-material/Assessment";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SettingsIcon from "@mui/icons-material/Settings";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <List>

        <ListItemButton>

          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />

        </ListItemButton>

        <ListItemButton>

          <ListItemIcon>
            <WarningAmberIcon />
          </ListItemIcon>

          <ListItemText primary="Incidents" />

        </ListItemButton>

        <ListItemButton>

          <ListItemIcon>
            <SmartToyIcon />
          </ListItemIcon>

          <ListItemText primary="AI Assistant" />

        </ListItemButton>

        <ListItemButton>

          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>

          <ListItemText primary="Reports" />

        </ListItemButton>

        <ListItemButton>

          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText primary="Settings" />

        </ListItemButton>

      </List>
    </Drawer>
  );
};

export default Sidebar;