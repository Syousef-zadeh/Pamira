import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import SocialMedia from "../SocialMedia/SocialMedia";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 8, sm: 15 }}
        py={{ xs: 8, sm: 10 }}
        pb={{ xs: 0, sm: 1 }}
        marginTop={{ xs: 8, sm: 8 }}
        bgcolor="#00142f"
        color="#adbed2"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Service</Box>
              <Box pt={{ xs: 1, sm: 2 }}>
                <Link to="/" color="inherit">
                  Botox
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  mesotherapy
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  Filler
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  Laser
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  Skin Care
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box pt={{ xs: 1, sm: 2 }}>
                <Link to="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box pt={{ xs: 1, sm: 2 }}>
                <Link to="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  register
                </Link>
              </Box>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Contact />
                <SocialMedia />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        textAlign="center"
        pt={{ xs: 1, sm: 2 }}
        pb={{ xs: 1, sm: 2 }}
        bgcolor="#001735"
        color="#adbed2"
      >
        © {new Date().getFullYear()} Pamira Clinic. All rights reserved.
      </Box>
    </footer>
  );
};
export default Footer;
