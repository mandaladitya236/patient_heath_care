// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next.
import { Link } from 'rebass';
import {Facebook,Twitter,LinkedIn,GitHub} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import { CardContent } from '@material-ui/core';
// import { Typography } from '@material-ui/core';
import './footer.css';
const styles = {
  root: {
    width: 500,
  },
  copyright: {
    marginTop: 10,
    backgroundColor: '',
    color: 'white',
  },
  footerContent: {
    backgroundColor: '',
    color: 'white',
  },
  button: {
    color: 'white',
    float: 'right',
    marginBottom: 60,
  },
};

class Footer extends React.Component {
  render() {
    // const { classes } = this.props;

    return (
      <>
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Elder<span>Care</span></h3>

				<p class="footer-links">
					<Link href="/home" >Home</Link>
					
					<Link href="/log">vitals</Link>
				
					<Link href="/symptom">Symptoms</Link>
				
					<Link href="/about">About</Link>
					
					<Link href="/prescriptions">Prescription</Link>
					
					<Link href="/charts">Charts</Link>
				</p>

				<p class="footer-company-name">ElderCare © 2022</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>G.M.Road</span> Patna-800004,Bihar</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+918529196217</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:mandaladitya236@gmail.com">mandaladitya236@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					We enable working people to take care of their parents by a simple health tracker. It helps them to schedule reminders about the appointments, medicine intakes, their doctors and clinics, their vitals and many more. 
				</p>

				<div class="footer-icons">

					<a href="#"><Facebook/></a>
					<a href="#"><Twitter/></a>
					<a href="#"><LinkedIn/></a>
					<a href="#"><GitHub/></a>

				</div>

			</div>

		</footer>
    </>
    );
  }
}

// Exporting the footer component with styling.
export default withStyles(styles)(Footer);
