import { Box } from "@mui/material";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Box display="flex">

      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>

        <Header />

        <Box p={4}>
          {children}
        </Box>

        <Footer />

      </Box>

    </Box>
  );
};

export default AppLayout;