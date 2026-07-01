import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

const drawerWidth = 240;

const Header = () => {
  return (
  <AppBar
  position="fixed"
  elevation={1}
  sx={{
    width: `calc(100% - ${drawerWidth}px)`,
    ml: `${drawerWidth}px`,
    zIndex: (theme) => theme.zIndex.drawer + 1,
  }}
>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AI Manufacturing Incident Assistant
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          <Avatar>S</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;