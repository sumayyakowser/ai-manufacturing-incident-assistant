import AppLayout from "../../layouts/AppLayout";

import KPICard from "../../components/dashboard/KPICard";

import { Grid, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <AppLayout>

      <Typography
        variant="h4"
        mb={3}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 3 }}>
          <KPICard
            title="Total Incidents"
            value={126}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <KPICard
            title="Open"
            value={18}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <KPICard
            title="Critical"
            value={4}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <KPICard
            title="Resolved"
            value={104}
          />
        </Grid>

      </Grid>

    </AppLayout>
  );
};

export default Dashboard;