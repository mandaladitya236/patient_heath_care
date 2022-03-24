// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { ListSubheader }  from '@material-ui/core' ;
import {Link} from 'rebass'
// Import UI components from material-ui-next.
import { withStyles,Grid,Typography } from '@material-ui/core';
// import Grid from 'material-ui/Grid';
// import Typography from 'material-ui/Typography';
// Importing icons/images
import profile from '../../assets/images/profile.png'
import report from '../../assets/images/report.png';
import medical_report from '../../assets/images/medical_report.png'
import journal from '../../assets/images/journal.png';
import appointment from '../../assets/images/appointment.png';
import prescription from '../../assets/images/prescription.png';
import doctor from '../../assets/images/doctor.png';
import chart from '../../assets/images/chart2.png';
// Importing Navbar component.
import NavBar from '../../Components/AppBar';

const styles = {
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 50,
  },
  heading: {
    fontSize: 35,
  }
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return [
      <NavBar />,
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className={classes.headline}>
          <Grid container spacing={24} className={classes.root} justifyContent="center">
            <Typography subtitle="display1" align="center">
              What would you like to do today?
            </Typography>
          </Grid>
        </Grid>,

        <div className="main-content-section">
          <Grid container spacing={24} className={classes.root}>
            <Grid item xs={12} sm={9} md={6} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                 Health log Vitals
              </Typography>
              <ListSubheader align="center">
                <Link
                  href="/log"
                >
                  <img src={medical_report} alt="clipboard" />
                </Link>
              </ListSubheader>
            </Grid>
            <Grid item xs={12} sm={9} md={6} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                Symptoms 
              </Typography>
              <ListSubheader align="center">
                <Link
                  href="/symptoms"
                >
                  <img src={journal} alt="health journal" />
                </Link>
              </ListSubheader>
            </Grid>

            <Grid item xs={12} sm={9} md={6} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                Schedule Appointments
              </Typography>
              <ListSubheader align="center">
                <Link
                  href="/appointments"
                >
                  <img src={appointment} alt="calendar" />
                </Link>
              </ListSubheader>
            </Grid>

            <Grid item xs={12} sm={9} md={6} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
              Prescriptions
              </Typography>
              <ListSubheader align="center">
                <Link
                  href="/prescriptions"
                >
                  <img src={prescription} alt="prescription card" />
                </Link>
              </ListSubheader>
            </Grid>

            <Grid item xs={12} sm={9} md={6}className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                D&C
              </Typography>
              <ListSubheader align="center">
                <Link
                  href="/doctors"
                >
                  <img src={doctor} alt="doctor" />
                </Link>
              </ListSubheader>
            </Grid>

            <Grid item xs={12} sm={9} md={6} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
               Vital Charts
              </Typography>
              <ListSubheader align="center">
                <Link
                  href="/charts"
                >
                  <img src={chart} alt="line graph" />
                </Link>
              </ListSubheader>
            </Grid>
            <Grid item xs={12} sm={9} md={6} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
               Reports
              </Typography>
              <ListSubheader align="center">
                <Link
                  href="/reports"
                >
                  <img src={report} alt="line graph" />
                </Link>
              </ListSubheader>
            </Grid>

            <Grid item xs={12} sm={9} md={6} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
               Patient profile
              </Typography>
              <ListSubheader align="center">
                <Link
                  href="/profile"
                >
                  <img src={profile} alt="line graph" />
                </Link>
              </ListSubheader>
            </Grid>
          </Grid>

          
        </div>,
      </div>,
    ];
  }
}

// Exporting the Home component so that the App.js file can render the Home page.
export default withStyles(styles)(Home);
