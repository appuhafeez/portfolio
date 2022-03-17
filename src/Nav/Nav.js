import * as React from "react";
import AppBar from "@mui/material/AppBar";
import "./Nav.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link } from "react-scroll";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core";

const pages = ["Products", "Pricing", "Blog"];

function Nav() {
  const navigate = useNavigate();
  const goToLink = (path) => {
    navigate(path);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const useStyles = makeStyles((theme: Theme) => ({
    abRoot: {
      backgroundColor: "red",
    },
    abStatic: {
      border: "solid blue 2px",
    },
  }));

  const useStyleMenu = makeStyles({
    root: {
      color: "azure",
      "& .MuiInputLabel-root": { color: "#0a1929" },
    },
  });

  const StyledAppBar = withStyles((theme) => ({
    root: {
      "&.MuiPaper-root": {
        backgroundColor: "#0a1929",
      },

      "&.MuiAppBar-positionSticky": {
        margin: "40px 20px 0px 20px",
        width: "calc(100% - 40px)",
        "& .MuiToolbar-root": {
          color: "green",
          "& .MuiButtonBase-root": {
            fontSize: 24,
          },
        },
      },
    },
  }))(AppBar);

  const theme = createMuiTheme({
    overrides: { MuiAppBar: { colorPrimary: { backgroundColor: "black" } } },
  });
  return (
    <MuiThemeProvider>
      <StyledAppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                classes={useStyleMenu.root}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                }}
              >
                <MenuItem
                  key="home-m"
                  style={{ backgroundColor: "#0a1929" }}
                  onClick={handleCloseNavMenu}
                  classes={useStyleMenu.root}
                >
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-item-b"
                    onClick={handleCloseNavMenu}
                    activeClass="active-scroll-class"
                    to="home"
                  >
                    <Typography
                      classes={useStyleMenu.root}
                      color="textPrimary"
                      border="textPrimary"
                      textAlign="center"
                    >
                      home
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  style={{ backgroundColor: "#0a1929" }}
                  key="about-m"
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-item-b"
                    activeClass="active-scroll-class"
                    to="about"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      color="textPrimary"
                      border="textPrimary"
                      textAlign="center"
                    >
                      About me
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  style={{ backgroundColor: "#0a1929" }}
                  key="exp-m"
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleCloseNavMenu}
                    className="nav-item-b"
                    activeClass="active-scroll-class"
                    to="exp"
                  >
                    <Typography
                      color="textPrimary"
                      border="textPrimary"
                      textAlign="center"
                    >
                      Experience/Education
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  style={{ backgroundColor: "#0a1929" }}
                  key="cert-m"
                  onClick={handleCloseNavMenu}
                  className="menu-class"
                >
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleCloseNavMenu}
                    className="nav-item-b"
                    activeClass="active-scroll-class"
                    to="award"
                  >
                    <Typography
                      color="textPrimary"
                      border="textPrimary"
                      textAlign="center"
                    >
                      Awards/Certifications
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  style={{ backgroundColor: "#0a1929" }}
                  key="contact-m"
                  onClick={handleCloseNavMenu}
                  className="menu-class"
                >
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleCloseNavMenu}
                    className="nav-item-b"
                    activeClass="active-scroll-class"
                    to="contact"
                  >
                    <Typography
                      color="textPrimary"
                      border="textPrimary"
                      textAlign="center"
                    >
                      Contact Me
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  style={{ backgroundColor: "#0a1929" }}
                  key="contact-m"
                  onClick={() => goToLink("/arts")}
                  className="menu-class"
                >
                  <Typography
                    color="textPrimary"
                    border="textPrimary"
                    textAlign="center"
                  >
                    Arts
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Hafeez Shaik
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                className="nav-item-b"
                activeClass="active-scroll-class"
                duration={500}
                to="home"
              >
                Home
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                className="nav-item-b"
                activeClass="active-scroll-class"
                duration={500}
                to="about"
              >
                About Me
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                activeClass="active-scroll-class"
                className="nav-item-b"
                duration={500}
                to="exp"
              >
                Experience/Education
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                activeClass="active-scroll-class"
                className="nav-item-b"
                duration={500}
                to="award"
              >
                Awards/Certifications
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                activeClass="active-scroll-class"
                className="nav-item-b"
                duration={500}
                to="contact"
              >
                Contact Me
              </Link>
              <div onClick={() => goToLink("/arts")} className="nav-item-b">
                Arts
              </div>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </MuiThemeProvider>
  );
}

export default Nav;
