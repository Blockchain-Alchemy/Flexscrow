import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Button, Drawer, Link, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainSidebarLink = styled(Link)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "block",
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const MainSidebar = (props) => {
  const { onClose, open } = props;
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={!lgUp && open}
      PaperProps={{ sx: { width: 256 } }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100,
      }}
      variant="temporary"
    >
      <Box sx={{ p: 2 }}>
        <NavLink to="/dashboard">
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Live Demo
          </MainSidebarLink>
        </NavLink>
        <NavLink to="/browse">
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Components
          </MainSidebarLink>
        </NavLink>
        <NavLink to="/docs/welcome">
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Documentation
          </MainSidebarLink>
        </NavLink>
        <Button
          component="a"
          fullWidth
          href="https://material-ui.com/store/items/devias-kit-pro"
          sx={{ mt: 1.5 }}
          target="_blank"
          variant="contained"
        >
          Buy Now
        </Button>
      </Box>
    </Drawer>
  );
};

MainSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
