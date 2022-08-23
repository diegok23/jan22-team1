import { Box, Typography } from "@mui/material";

function TextBanner() {
  return (
    <Box mt={{ md: 23, lg: 20, xl: 22 }} ml={{ md: 32, lg: 45, xl: 62 }}>
      <Typography variant="h2">Find a route and</Typography>
      <Typography variant="h2">
        begin your adventure{" "}
        <Typography variant="h2" component="span" color="secondary">
          now
        </Typography>
      </Typography>
    </Box>
  );
}

export default TextBanner;
