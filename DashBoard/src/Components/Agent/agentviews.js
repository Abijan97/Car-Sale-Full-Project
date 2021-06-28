import React,{useEffect,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axios from 'axios';
import CreateAgent from '../create-agent.component';

//materila ui things
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.success.light,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));





export default function AgentCard() {
  const classes = useStyles();

  const [agents,setAgents]=useState([]);

useEffect(()=>{
  axios
    .get('http://localhost:5001/agents/')
    .then(res => setAgents(res.data))
    .catch(error=>console.log(error));
})




  return (
    <React.Fragment>
        <CssBaseline/>
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Agents
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              you can add, view, delete agents from here.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>


                </Grid>
                <Grid item>
            

                <button type="button" className="btn btn-primary float-right" data-bs-toggle="modal" data-bs-target="#exampleModalone">
  ADD AGENT
</button>

<div className="modal fade bd-example-modal-lg" id="exampleModalone" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
     
      <div className="modal-body">
        <div className="container border border-primary rounded pb-5 pt-5 mt-2 mb-2">
          <div>
          <h4 className="bg-primary text-white p-2 mb-3">ADD AGENT</h4>
          </div>
          <div className="col-9">
            <CreateAgent/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

                </Grid>
              </Grid>
            </div>
          </Container>
        </div>





        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {agents.map((agent,key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require(`./pic/${agent.agentImage}`)}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {agent.agentName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                    {agent.company}
                    </Typography>
                    <Typography>
                        {agent.email}
                    </Typography>
                    <Typography>
                        {agent.mobile}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    

    </React.Fragment>
  );
}