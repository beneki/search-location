import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
    card: {
      minWidth: 275,
      marginBottom: "1rem",
      boxShadow: "-3px 5px 14px 1px #cecece"
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  },
  LocationCard = props => {
    const { location, classes, changeLocHistory } = props,
      { display_name, lat, lon } = location;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Location :
          </Typography>
          <Typography variant="h6" component="h6">
            {display_name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Point:
          </Typography>
          <Typography component="p">
            Latitude : {lat}
            <br />
            Longitude : {lon}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => changeLocHistory(location, false)}
          >
            Omit
          </Button>
        </CardActions>
      </Card>
    );
  };

LocationCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationCard);
