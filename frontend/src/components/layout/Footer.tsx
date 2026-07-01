import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
   <Box
    sx={{
        py:2,
        bgcolor:"#1f2937",
        color:"#fff",
        textAlign:"center",
        width:"100%"
    }}
>
      <Typography variant="body2">
        © 2026 AI Manufacturing Incident Assistant
      </Typography>
    </Box>
  );
};

export default Footer;