import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import "../experience-education/MainSection.css";
import Awards from "./Awards";
import Publications from "./Publications";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabView() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tab: {
      background: "green",
      "&.Mui-selected": {
        background: "red",
      },
    },
  }));

  const classes = useStyles();
  const tabClasses = { root: classes.tab };

  const handleChangeIndex = (index) => {
    setValue(index);
    console.log(value);
  };
  return (
    <div className="main-div" id="award">
      <Box sx={{ width: "100%", bgcolor: "transperent" }}>
        <Tabs
          value={value}
          className="tab-label"
          onChange={handleChange}
          aria-label="full width tabs"
          centered
        >
          <Tab
            className="tab-label"
            label={
              value !== 0 ? (
                <span style={{ color: "white" }}>Awards</span>
              ) : (
                "Awards"
              )
            }
          />
          <Tab
            className="tab-label"
            label={
              value !== 1 ? (
                <span style={{ color: "white" }}>Certifications</span>
              ) : (
                "Certifications"
              )
            }
          />
          <Tab
            className="tab-label"
            label={
              value !== 2 ? (
                <span style={{ color: "white" }}>Publications</span>
              ) : (
                "Publications"
              )
            }
          />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="tab-body">
              <Awards />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="tab-body">
              <Awards type="certificate" isCert={true} />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="tab-body">
              <Publications />
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}

export default TabView;
