import React from 'react';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

}));



export default function Album() {
  const classes = useStyles();

  return (
    
  
        <div className={classes.heroContent}>
        
          <Container className="mb-5" maxWidth="sm">
            {/* <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
              CS CAR SALES
            </Typography> */}
            <Typography variant="h5" align="center" color="textSecondary" paragraph>  
            A one stop shop for all your new and pre-owned car needs
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
          </div>
        
  )
            }