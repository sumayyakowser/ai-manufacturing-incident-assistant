import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

const drawerWidth = 240;

const AppLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Header />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f5f7fa",
        }}
      >
        <Toolbar />

        <Box
          sx={{
            flexGrow: 1,
            px: 4,
            py: 3,
          }}
        >
          <Outlet />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
};

export default AppLayout;
