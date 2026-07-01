import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AI Manufacturing Incident Assistant
        </Typography>

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        <Box ml={2}>
          <Avatar>S</Avatar>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;