import styled from "@emotion/styled";
import { Box, ListItem, Paper } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display:'flex',
    alignItems:'center',

  }));

  export const ContainerFooter = styled(Box)(({ theme }) => ({
    height: "8vh", 
    backgroundColor: theme.palette.primary.main,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'0px 40px 0px 40px',
    [theme.breakpoints.down("sm")]: {
        display: "none",
      },

  }));

  export const ItemsList = styled(ListItem)(({ theme }) => ({
    padding:'0px',
    color:theme.palette.secondary.main,
    marginLeft:'10px'
  }));