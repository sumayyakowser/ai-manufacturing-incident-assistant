import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  title: string;
  value: string;
}

const KPICard = ({ title, value }: Props) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography color="text.secondary">{title}</Typography>

        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default KPICard;