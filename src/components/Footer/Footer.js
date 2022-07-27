import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import SocialMedia from "../SocialMedia/SocialMedia";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <footer style={{direction:"rtl"}}>
      <Box
        px={{ xs: 8, sm: 15 }}
        py={{ xs: 8, sm: 10 }}
        pb={{ xs: 0, sm: 1 }}
        marginTop={{ xs: 8, sm: 8 }}
        bgcolor="#00142f"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}> خدمات پامیرا</Box>
              <Box pt={{ xs: 1, sm: 2 }}>
                <Link to="/" color="inherit">
                  مراقبت های پوستی
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  مزوتراپی
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  فیلر
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  لیزر
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  بوتاکس
                </Link>
              </Box>
            </Grid>


            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>دسترسی آسان</Box>
              <Box pt={{ xs: 1, sm: 2 }}>
                <Link to="/" color="inherit">
                  صفحه اصلی
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  نمونه کار
                </Link>
              </Box>
              <Box >
                <Link to="/" color="inherit">
                  تماس با ما
                </Link>
              </Box>
              <Box >
                <Link to="/" color="inherit">
                  درباره ما
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>اطلاعات تماس</Box>
              {/* <Box pt={{ xs: 1, sm: 2 }}>
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
              </Box> */}
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
        color="white"
        // color="#adbed2"
      >
         کلیه حقوق این وب‌ سایت برای کلینیک‌ زیبایی پامیرا محفوظ است.  © {new Date().getFullYear()}
      </Box>
    </footer>
  );
};
export default Footer;
