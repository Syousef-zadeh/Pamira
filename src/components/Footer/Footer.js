import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import SocialMedia from "./component/SocialMedia";

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
              <Box style={{display:"flex", flexDirection:"column"}}>
                <span style={{paddingTop: "16px"}}>Address: 17 shahrivar Av. Tehran</span>
                <span>021-33345247</span>

                <SocialMedia />
              </Box>
            </Grid>
          </Grid>
        <Box textAlign="center" pt={{ xs: 8, sm: 10 }} pb={{ xs: 2, sm: 3 }}>
          © {new Date().getFullYear()} Pamira Clinic. All rights reserved.
        </Box>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;