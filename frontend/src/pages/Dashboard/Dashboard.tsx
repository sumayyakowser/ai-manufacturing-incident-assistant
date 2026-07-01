import { Grid, Typography } from "@mui/material";
import KPICard from "../../components/dashboard/KPICard";

const Dashboard = () => {
  return (
    <>
     <Typography
    variant="h4"
    sx={{
        mb:4,
        fontWeight:600
    }}
>
    Dashboard
</Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <KPICard title="Total Incidents" value="126" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <KPICard title="Open" value="18" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <KPICard title="Critical" value="4" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <KPICard title="Resolved" value="104" />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;